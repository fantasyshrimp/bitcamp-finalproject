package bitcamp.app.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import bitcamp.app.service.BoardService;
import bitcamp.app.service.LikeService;
import bitcamp.app.service.MemberService;
import bitcamp.app.service.ObjectStorageService;
import bitcamp.app.service.ReplyService;
import bitcamp.app.vo.Board;
import bitcamp.app.vo.Member;
import bitcamp.util.ErrorCode;
import bitcamp.util.RestResult;
import bitcamp.util.RestStatus;
import jakarta.servlet.http.HttpSession;

@RestController
@RequestMapping("/admin")
public class AdminController {
  @Autowired private MemberService memberService;
  @Autowired private BoardService boardService;
  @Autowired private LikeService likeService;
  @Autowired private ReplyService replyService;

  @Autowired private ObjectStorageService objectStorageService;
  private String bucketName = "bitcamp-bucket04-member-photo";

  @GetMapping()
  public Object test() {
    return memberService.list(null);
  }
  
  @GetMapping("{no}")
  public Object view(@PathVariable int no) {
    Member member = memberService.get(no);
    if (member != null) {
      return new RestResult()
          .setStatus(RestStatus.SUCCESS)
          .setData(member);
    } else {
      return new RestResult()
          .setStatus(RestStatus.FAILURE)
          .setErrorCode(ErrorCode.rest.NO_DATA);
    }
  }
  
  @GetMapping("/commentlist")
  public Object test3() {
    return replyService.list();
  }
  
  //List<Board> list(Map<Object, Object> page);
  
  
  @GetMapping("/board")
  @ResponseBody
  public Map<String, Object> list(@RequestParam(required = false) String keyword, @RequestParam(defaultValue = "1") int currentPage, HttpSession session) {

    String sort = (String) session.getAttribute("sort");
    Map<String, Object> resultMap = new HashMap<>();

    if (Objects.equals(sort, "hot")) {
      List<Board> list = boardService.listHot();
      session.removeAttribute("sort");

      resultMap.put("state", false);
      resultMap.put("data", list);
      return resultMap;

    } else if (Objects.equals(sort, "recent")) {
      List<Board> list = boardService.listRecent();
      session.removeAttribute("sort");

      resultMap.put("state", false);
      resultMap.put("data", list);
      return resultMap;

    } else if (Objects.equals(sort, "follow")) {
      Member loginUser = (Member) session.getAttribute("loginUser");

      List<Board> list = boardService.listFollow(loginUser.getNo());
      session.removeAttribute("sort");

      resultMap.put("state", true);
      resultMap.put("data", list);
      return resultMap;
    }

    String key = (String) session.getAttribute("keyword");

    if (key != null) {
      resultMap.put("key", false);
    } else {
      resultMap.put("key", true);
    }

    Map<Object, Object> page = new HashMap<Object, Object>();

    page.put("keyword", key);
    page.put("pageSize", 10);
    page.put("offset", (currentPage - 1) * 10);

    List<Board> list = boardService.list(page);

    session.removeAttribute("keyword");

    for (Board b : list) {
      b.setLikeCnt(likeService.countLiker(b.getBoardNo(), "board"));
    }

    resultMap.put("state", true);
    resultMap.put("data", list);
    return resultMap;
  }

}

