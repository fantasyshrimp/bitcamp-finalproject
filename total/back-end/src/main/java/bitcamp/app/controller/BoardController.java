package bitcamp.app.controller;

import java.io.IOException;
import java.net.URI;
import java.net.URLEncoder;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.nio.charset.StandardCharsets;
import java.util.List;
import java.util.Objects;
import java.util.UUID;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.atomic.AtomicReference;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import bitcamp.app.NaverObjectStorageConfig;
import bitcamp.app.service.BoardService;
import bitcamp.app.service.LikeService;
import bitcamp.app.service.MemberService;
import bitcamp.app.service.ObjectStorageService;
import bitcamp.app.service.PointService;
import bitcamp.app.vo.Board;
import bitcamp.app.vo.GeneratedImg;
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

  @Autowired private MemberService memberService;
  @Autowired private BoardService boardService;
  @Autowired private LikeService likeService;
  @Autowired private PointService pointService;
  @Autowired private ObjectStorageService objectStorageService;
  @Autowired private NaverObjectStorageConfig naverObjectStorageConfig;
  @Autowired private NaverClovaSummary naverClovaSummary;
  @Autowired private NaverPapagoTranslation naverPapagoTranslation;

  @PostMapping
  public Object insert(int writerNo, String originContent) {

    String bucketName = naverObjectStorageConfig.getBucketName();
    // 오늘은 몰디브에서의 휴양 일정이었습니다. 아침 일찍 일어나 해변을 걸으며 몰디브의 아름다운 풍경을 감상했습니다. 해안가에서는 스노클링을 즐기는 사람들이 많았고, 내가 챙긴 노르딕 스타킹을 신고 바다 속으로 뛰어들었습니다. 투명한 바다속에서는 다양한 물고기들이 떠다니며 내게 귀엽게 다가와 함께 수영했습니다. 몰디브의 아름다운 자연환경과 더불어 즐거운 수상 스포츠를 즐길 수 있는 멋진 곳이라는 생각이 들었습니다.

    AtomicReference<String> summaryContentAtomicRef = new AtomicReference<>();

    CompletableFuture.supplyAsync(
        () -> naverClovaSummary.summarize(originContent))
    .thenApply(summary -> {
      String filteredSummary = GsonFilter.summary(summary);
      // log.info("filteredSummary >>> " + filteredSummary);  // 해안가에서는 스노클링을 즐기는 사람들이 많았고, 내가 챙긴 노르딕 스타킹을 신고 바다 속으로 뛰어들었습니다. 몰디브의 아름다운 자연환경과 더불어 즐거운 수상 스포츠를 즐길 수 있는 멋진 곳이라는 생각이 들었습니다.
      summaryContentAtomicRef.set(filteredSummary);
      return filteredSummary;
    })
    .thenApply(summaryContent -> naverPapagoTranslation.translate(summaryContent))
    .thenApply(GsonFilter::translate)
    .thenAccept(transContent -> {
      log.info("transContent >>> " + transContent);

      String fileName = UUID.randomUUID().toString() + ".png";

      // GPU 로 요청 보냄
      HttpClient httpClient = HttpClient.newHttpClient();
      String url = "http://223.130.129.169:8085/generate";
      //      String url = "http://localhost:8085/generate";
      String requestBody = "transContent=" + URLEncoder.encode(transContent, StandardCharsets.UTF_8) + "&fileName=" + fileName;
      String fileUrl = "";

      HttpRequest httpRequest = HttpRequest.newBuilder()
          .uri(URI.create(url))
          .header("Content-Type", "application/x-www-form-urlencoded")
          .POST(HttpRequest.BodyPublishers.ofString(requestBody))
          .build();

      try {
        HttpResponse<String> httpResponse = httpClient.send(httpRequest, HttpResponse.BodyHandlers.ofString());

        // GPU 응답 옴!
        log.info("Response status code >>> " + httpResponse.statusCode());
        log.info("Response body >>> " + httpResponse.body());

        fileUrl = httpResponse.body();

      } catch (IOException | InterruptedException e) {
        log.error("Error sending POST request", e);
      }

      log.info("명령 프롬프트 이미지 생성 완료!");

      String summaryContent = summaryContentAtomicRef.get();
      // log.info("summaryContent >>> " + summaryContent);  // 해안가에서는 스노클링을 즐기는 사람들이 많았고, 내가 챙긴 노르딕 스타킹을 신고 바다 속으로 뛰어들었습니다. 몰디브의 아름다운 자연환경과 더불어 즐거운 수상 스포츠를 즐길 수 있는 멋진 곳이라는 생각이 들었습니다.

      Member member = memberService.get(writerNo);

      Board board = new Board();
      board.setWriter(member);
      board.setOriginContent(originContent);
      board.setSummaryContent(summaryContent);
      board.setTransContent(transContent);

      GeneratedImg generatedImg = new GeneratedImg();
      generatedImg.setFilename(fileUrl);
      board.setGeneratedImg(generatedImg);

      // 게시글 DB 에 업로드
      boardService.add(board);

      //사용자에게 완료 표시 및 알람
      log.info("DB에 게시글 및 파일 업로드 완료함");

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
