package bitcamp.app.controller;

import java.util.List;
import java.util.concurrent.CompletableFuture;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import bitcamp.app.service.BoardService;
import bitcamp.app.service.LikeService;
import bitcamp.app.vo.Board;
import bitcamp.util.GsonFilter;
import bitcamp.util.NaverClovaSummary;
import bitcamp.util.NaverPapagoTranslation;

@RestController
// @RequestMapping("/member")
@RequestMapping("/boards")
public class BoardController {

  Logger log = LogManager.getLogger(getClass());

  {
    log.trace("BoardController 생성됨!");
  }

  @Autowired private BoardService boardService;
  @Autowired private LikeService likeService;

  @PostMapping
  public Object insert(int writerNo, String originContent) {

    CompletableFuture<Void> future = CompletableFuture.supplyAsync(
        () -> NaverClovaSummary.summarize(originContent))
        .thenApply(GsonFilter::summary)
        .thenApply(NaverPapagoTranslation::translate)
        .thenApply(GsonFilter::translate)
        .thenAccept(transContent -> {
          // 비동기 작업이 모두 완료된 후 실행될 코드
          log.info("thenAccept >>> " + transContent);
          return ;
        });

    return null;
    //    return future;

    //    return new RestResult()
    //        .setStatus(RestStatus.SUCCESS)
    //        .setData("");

  }

  @GetMapping
  public List<Board> list(String keyword) {
    List<Board> list = boardService.list(keyword);
    for (Board b : list) {
      b.setLikeCnt(likeService.countLiker(b.getBoardNo(), "board"));
    }
    return list;
  }

  @GetMapping("{no}")
  public Board view(@PathVariable int no) {

    return boardService.get(no);
  }

}

