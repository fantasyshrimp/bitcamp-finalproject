package bitcamp.app.controller;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.List;
import java.util.Objects;
import java.util.UUID;
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
import bitcamp.app.service.PointService;
import bitcamp.app.vo.Board;
import bitcamp.app.vo.Member;
import bitcamp.util.GsonFilter;
import bitcamp.util.NaverClovaSummary;
import bitcamp.util.NaverPapagoTranslation;
import bitcamp.util.RestResult;
import bitcamp.util.RestStatus;
import jakarta.servlet.http.HttpSession;

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
  @Autowired private PointService pointService;

  @PostMapping
  public Object insert(int writerNo, String originContent) {

    CompletableFuture<Void> future = CompletableFuture.supplyAsync(
        () -> NaverClovaSummary.summarize(originContent))
        .thenApply(GsonFilter::summary)
        .thenApply(NaverPapagoTranslation::translate)
        .thenApply(GsonFilter::translate)
        .thenAccept(transContent -> {
          //log.info("transContent >>> " + transContent);
          //오늘은 몰디브에서의 휴양 일정이었습니다. 아침 일찍 일어나 해변을 걸으며 몰디브의 아름다운 풍경을 감상했습니다. 해안가에서는 스노클링을 즐기는 사람들이 많았고, 내가 챙긴 노르딕 스타킹을 신고 바다 속으로 뛰어들었습니다. 투명한 바다속에서는 다양한 물고기들이 떠다니며 내게 귀엽게 다가와 함께 수영했습니다. 몰디브의 아름다운 자연환경과 더불어 즐거운 수상 스포츠를 즐길 수 있는 멋진 곳이라는 생각이 들었습니다.

          String fileName = UUID.randomUUID().toString() + ".png";
          //String command = "python C:\\Users\\bitcamp\\git\\stable-diffusion-keras\\simple_cmd.py \"" + transContent + "\" " + fileName;
          String baseDir = System.getProperty("user.dir");
          //log.info(baseDir); // C:\Users\bitcamp\git\bitcamp-finalproject\total\back-end
          String scriptPath = baseDir + File.separator + "src" + File.separator + "main" + File.separator + "pythonapp" + File.separator + "simple_cmd.py";
          String command = "python \"" + scriptPath + "\" \"" + transContent + "\" " + fileName;
          try {
            Process process = Runtime.getRuntime().exec(command);
            BufferedReader stdInput = new BufferedReader(new InputStreamReader(process.getInputStream()));
            BufferedReader stdError = new BufferedReader(new InputStreamReader(process.getErrorStream()));
            String s = null;
            while ((s = stdInput.readLine()) != null) {
              log.info(s);
            }
            while ((s = stdError.readLine()) != null) {
              log.info(s);
            }
            log.info("명령 프롬프트 이미지 생성 완료!");
          } catch (IOException e) {
            log.error("명령 프롬프트 에러 발생!: " + command, e);
          }

        });

    return new RestResult()
        .setStatus(RestStatus.SUCCESS);

  }

  @GetMapping
  public List<Board> list(String keyword, HttpSession session) {

    String sort = (String) session.getAttribute("sort");

    if (Objects.equals(sort, "hot")) {
      List<Board> list = boardService.listHot();
      session.removeAttribute("sort");
      return list;

    } else if (Objects.equals(sort, "recent")) {
      List<Board> list = boardService.listRecent();
      session.removeAttribute("sort");

      return list;
    } else if (Objects.equals(sort, "follow")) {
      Member loginUser = (Member) session.getAttribute("loginUser");

      List<Board> list = boardService.listFollow(loginUser.getNo());
      session.removeAttribute("sort");

      return list;
    }

    String key = (String) session.getAttribute("keyword");
    List<Board> list = boardService.list(key);

    session.removeAttribute("keyword");

    for (Board b : list) {
      b.setLikeCnt(likeService.countLiker(b.getBoardNo(), "board"));
    }
    return list;
  }

  @GetMapping("{no}")
  public Board view(@PathVariable int no) {

    return boardService.get(no);
  }

  @GetMapping("auth")
  public boolean authCheck(HttpSession session) {

    Member loginUser = (Member) session.getAttribute("loginUser");

    if (loginUser != null) {
      return true;
    }
    return false;
  }

  @PostMapping("keyword")
  public Object keyword(String keyword, HttpSession session) {
    if (keyword != null) {
      session.setAttribute("keyword", keyword);

    }
    return new RestResult()
        .setStatus(RestStatus.SUCCESS);
  }

  @PostMapping("sort")
  public Object sort(String sort, HttpSession session) {

    if (sort != null) {
      session.setAttribute("sort", sort);
    }

    return new RestResult()
        .setStatus(RestStatus.SUCCESS);
  }

}
