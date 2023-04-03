package bitcamp.app.controller;

import java.util.List;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import bitcamp.app.service.BoardService;
import bitcamp.app.vo.Board;
import bitcamp.util.RestResult;
import bitcamp.util.RestStatus;

@RestController
// @RequestMapping("/member")
@RequestMapping("/api")
public class BoardController {

  Logger log = LogManager.getLogger(getClass());

  {
    log.trace("BoardController 생성됨!");
  }

  @Autowired private BoardService boardService;

  @PostMapping("boards")
  public Object insert(int writerNo, String originContent) {

    return new RestResult()
        .setStatus(RestStatus.SUCCESS);
  }

  @GetMapping("/boards")
  public List<Board> list(String keyword) {

    return boardService.list(keyword);
  }

  @GetMapping("/boards/{no}")
  public Board view(@PathVariable int no) {

    return boardService.get(no);
  }

}

