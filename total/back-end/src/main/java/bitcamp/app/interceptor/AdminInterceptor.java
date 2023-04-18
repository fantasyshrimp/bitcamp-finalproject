package bitcamp.app.interceptor;


import java.io.PrintWriter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import com.fasterxml.jackson.databind.ObjectMapper;

import bitcamp.app.controller.AuthController;
import bitcamp.app.service.MemberService;
import bitcamp.app.vo.Member;
import bitcamp.util.ErrorCode;
import bitcamp.util.RestResult;
import bitcamp.util.RestStatus;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

@Component
public class AdminInterceptor implements HandlerInterceptor {

  @Autowired
  private MemberService memberService;
  @Autowired
  private AuthController authController;

  @Override
  public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
    System.out.println("preHandle() 호출됨!");
    HttpSession session = request.getSession(); // HttpSession 객체 얻기
    Member loginUser = (Member) session.getAttribute("loginUser"); // loginUser 정보 가져오기
    System.out.println("loginUser test");
    System.out.println(loginUser);
    
    if (loginUser == null || loginUser.getAuthLevel() != 9) { // 로그인된 회원의 no가 9가 아니라면
    	response.setContentType("application/json;charset=UTF-8");
        PrintWriter out = response.getWriter();
        out.print(new ObjectMapper().writeValueAsString(
            new RestResult()
            .setStatus(RestStatus.FAILURE)
            .setErrorCode(ErrorCode.rest.UNAUTHORIZED)
            .setData("권한이 없습니다.")));
        System.out.println("false");
        return false;
    } else {
      System.out.println("true");
      return true;
    }
  }


    // Controller가 실행된 후 실행되는 postHandle 메소드
    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
        // interceptor에서 처리할 로직을 구현합니다.

    }

    // View까지 모두 처리가 끝난 후 실행되는 afterCompletion 메소드
    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
        // interceptor에서 처리할 로직을 구현합니다.
    }
}
