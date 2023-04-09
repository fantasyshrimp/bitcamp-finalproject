package bitcamp.app.controller;

import java.util.Map;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import bitcamp.app.service.MemberService;
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
  
  @PostMapping("naverLogin")
  public Object naverLogin(@RequestBody Map<String, String> params) {
    
//    log.info("params ===>>> " + params.toString()); {access_token=AAAAOK3YZUQo0huTlz-hhCJuoC8c2oqBXuNgug8SJ9b9hKMAVsrDbQFrZ1ZEsW2pGT6hw3ouHoNIF2x1BYfjUcqtDWQ, state=4b53e1ff-4b37-44f4-b857-eb93287b5f70, token_type=bearer, expires_in=3600}
    
    // 요청 샘플 https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id=jyvqXeaVOVmV&client_secret=527300A0_COq1_XV33cf&code=EIc5bFrl4RibFls1&state=9kgsGTfH4j7IyAkg 
    
    return null;
  }

}









