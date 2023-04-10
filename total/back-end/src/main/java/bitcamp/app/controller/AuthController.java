package bitcamp.app.controller;

import java.time.LocalDateTime;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import bitcamp.app.service.MemberService;
import bitcamp.app.service.PointService;
import bitcamp.app.vo.Member;
import bitcamp.util.ErrorCode;
import bitcamp.util.PasswordChecker;
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
  @Autowired private PointService pointService;

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
  public Object signup(
      String nickname,
      String email,
      String password,
      HttpSession session) {

    if(nickname.length() <= 50 ||
        email.contains("@") ||
        PasswordChecker.isValidPassword(password)) {

      Member member = new Member();
      member.setNickname(nickname);
      member.setEmail(email);
      member.setPassword(password);

      memberService.add(member);

      session.setAttribute("loginUser", member);

      Member m = (Member) session.getAttribute("loginUser");

      pointService.signupInsert(m.getNo());

      return new RestResult()
          .setStatus(RestStatus.SUCCESS);
    }

    return new RestResult()
        .setErrorCode(ErrorCode.rest.CONTROLLER_EXCEPTION)
        .setStatus(RestStatus.FAILURE);
  }

  @PostMapping("login")
  public Object login(
      String email,
      String password,
      HttpSession session) {

    Member member = memberService.get(email, password);

    if (member != null) {
      session.setAttribute("loginUser", member);
      Member m = (Member) session.getAttribute("loginUser");

      LocalDateTime now = LocalDateTime.now(); // 현재 시간
      LocalDateTime resetTime = LocalDateTime.of(now.getYear(), now.getMonth(), now.getDayOfMonth(), 0, 0, 0);  // 매일 00시에 리셋되는 기준 시간

      if (m.getLastLoginDt() == null || member.getLastLoginDt().isBefore(resetTime)) {  // 기준 시간 이후에 로그인한 경우
        pointService.loginInsert(m.getNo());
      }
      memberService.lastLoginUpdate(m.getNo());

      return new RestResult()
          .setStatus(RestStatus.SUCCESS);
    } else {
      return new RestResult()
          .setErrorCode(ErrorCode.rest.NO_DATA)
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









