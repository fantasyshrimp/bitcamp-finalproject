package bitcamp.app.controller;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import bitcamp.app.service.MemberService;
import bitcamp.app.vo.Member;
import bitcamp.util.ErrorCode;
import bitcamp.util.RestResult;
import bitcamp.util.RestStatus;
import jakarta.servlet.http.HttpSession;

@RestController
@RequestMapping("/auth")
public class AuthController {

  Logger log = LogManager.getLogger(getClass());

  {
    log.trace("AuthController 생성됨!");
  }

  @Autowired private MemberService memberService;

  @GetMapping("checkemail")
  public Object checkemail(String email) {
    Member member = memberService.getByEmail(email);

    if (member != null) {
      return new RestResult()
          .setData(member)
          .setStatus(RestStatus.SUCCESS);
    } else {
      return new RestResult()
          .setData(ErrorCode.rest.NO_DATA)
          .setStatus(RestStatus.FAILURE);
    }
  }

  @GetMapping("checknickname")
  public Object checknickname(String nickname) {
    Member member = memberService.getByNickname(nickname);

    if (member != null) {
      return new RestResult()
          .setData(member)
          .setStatus(RestStatus.SUCCESS);
    } else {
      return new RestResult()
          .setData(ErrorCode.rest.NO_DATA)
          .setStatus(RestStatus.FAILURE);
    }
  }

  @PostMapping("signup")
  public Object login(
      String nickname,
      String email,
      String password,
      HttpSession session) {

    Member member = new Member();
    member.setNickname(nickname);
    member.setEmail(email);
    member.setPassword(password);

    return new RestResult()
        .setStatus(RestStatus.SUCCESS);
  }

  @PostMapping("login")
  public Object login(
      String email,
      String password,
      HttpSession session) {

    Member member = memberService.get(email, password);

    if (member != null) {
      session.setAttribute("loginUser", member);

      return new RestResult()
          .setStatus(RestStatus.SUCCESS);
    } else {
      return new RestResult()
          .setErrorCode(ErrorCode.rest.UNAUTHORIZED)
          .setStatus(RestStatus.FAILURE);
    }
  }

  @GetMapping("logout")
  public Object logout(HttpSession session) {
    session.invalidate();

    return new RestResult()
        .setStatus(RestStatus.SUCCESS);
  }

  @GetMapping("user")
  public Object user(HttpSession session) {
    Member loginUser = (Member) session.getAttribute("loginUser");

    if (loginUser != null) {
      return new RestResult()
          .setStatus(RestStatus.SUCCESS)
          .setData(loginUser);
    } else {
      return new RestResult()
          .setStatus(RestStatus.FAILURE);
    }
  }

}









