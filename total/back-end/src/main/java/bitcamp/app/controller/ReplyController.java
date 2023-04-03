package bitcamp.app.controller;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import bitcamp.app.service.ReplyService;
import bitcamp.app.vo.Member;
import bitcamp.app.vo.Reply;
import bitcamp.util.RestResult;
import bitcamp.util.RestStatus;
import jakarta.servlet.http.HttpSession;

@RestController
@RequestMapping("/api")
public class ReplyController {
  @Autowired private ReplyService replyService;

  @PostMapping("/reply")
  public Object insert(
      Reply reply,
      HttpSession session) {

    Member loginUser = (Member) session.getAttribute("loginUser");
    reply.setWriterNo(loginUser.getNo());

    System.out.println(reply);
    replyService.insert(reply);

    return new RestResult()
        .setStatus(RestStatus.SUCCESS);
  }

  @GetMapping("/reply/{no}")
  public List<Reply> view(@PathVariable int no) {

    return replyService.get(no);
  }

  @GetMapping("/reply/like/{no}")
  public List<Integer> countCommentLike(@PathVariable int no, HttpSession session) {
    List<Integer> list = new ArrayList<>();
    Member loginUser = (Member) session.getAttribute("loginUser");

    list.add(replyService.countCommentLike(no));
    list.add(loginUser.getNo());

    return list;
  }

  @DeleteMapping("/reply/delete/{no}")
  public Object commentDelete(@PathVariable int no) {
    replyService.commentDelete(no);

    return new RestResult()
        .setStatus(RestStatus.SUCCESS);
  }

}

