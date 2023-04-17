package bitcamp.app.interceptor;

import java.io.PrintWriter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import com.fasterxml.jackson.databind.ObjectMapper;

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
	
	public Object preHandle(HttpSession session, HttpServletResponse response, Object handler) throws Exception {
	    System.out.println("preHandle() 호출됨!");

	    
	    System.out.println("preHandle()!");

	    Member loginUser = (Member) session.getAttribute("loginUser");
	    System.out.println("loginUser test");
	    System.out.println(loginUser);
	    if (loginUser == null || loginUser.getNo() != 9) {
	    	System.out.println("if문 동작");
	    	return true;
	    } else {
	        System.out.println("test2");
	        return false;
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
