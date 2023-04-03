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
import bitcamp.util.ErrorCode;
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
    if (loginUser == null) {
      list.add(0);
    } else {
      list.add(loginUser.getNo());
    }
    return list;
  }

  @DeleteMapping("/reply/delete/{no}")
  public Object commentDelete(@PathVariable int no) {

    replyService.commentDelete(no);

    return new RestResult()
        .setStatus(RestStatus.SUCCESS);
  }

  @GetMapping("/reply/islike/{no}")
  public Object checkLikeState(@PathVariable int no, HttpSession session) {

    Member loginUser = (Member) session.getAttribute("loginUser");

    if (loginUser == null) {
      System.out.println("로그인 요망");
      return new RestResult()
          .setStatus(RestStatus.FAILURE)
          .setErrorCode(ErrorCode.rest.UNAUTHORIZED)
          .setData("로그인 요망");
    }

    Reply reply = new Reply();
    reply.setMemberNo(loginUser.getNo());
    reply.setReplyNo(no);

    if(!replyService.checkLikeState(reply)) {
      return new RestResult()
          .setStatus(RestStatus.SUCCESS)
          .setData("unlike");
    }

    return new RestResult()
        .setStatus(RestStatus.SUCCESS)
        .setData("like");
  }

  @PostMapping("/reply/like")
  public Object like(Reply reply, HttpSession session) {
    Member loginUser = (Member) session.getAttribute("loginUser");

    reply.setMemberNo(loginUser.getNo());

    replyService.like(reply);

    return new RestResult()
        .setStatus(RestStatus.SUCCESS);
  }

  @DeleteMapping("/reply/like/{no}")
  public Object unlike(@PathVariable int no, HttpSession session) {
    Member loginUser = (Member) session.getAttribute("loginUser");

    Reply reply = new Reply();
    reply.setMemberNo(loginUser.getNo());
    reply.setReplyNo(no);

    replyService.unlike(reply);

    return new RestResult()
        .setStatus(RestStatus.SUCCESS);
  }


}


