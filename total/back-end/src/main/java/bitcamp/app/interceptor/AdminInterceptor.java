package bitcamp.app.interceptor;

import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import bitcamp.app.vo.Member;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

@Component
public class AdminInterceptor implements HandlerInterceptor {
	@Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        HttpSession session = request.getSession();
        Member member = (Member) session.getAttribute("member");
        System.out.println("AdminInterceptor 동작");

        if (member != null && member.getAuthLevel() == 9) {
        	return true;
        	
        } else {
        	response.sendRedirect("https://www.naver.com/");	// sweetalert2 알람 창 띄우기
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
