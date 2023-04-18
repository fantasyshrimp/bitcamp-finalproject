package bitcamp.app.interceptor;



import java.io.PrintWriter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import com.fasterxml.jackson.databind.ObjectMapper;

import bitcamp.app.service.MemberService;
import bitcamp.app.service.PointService;
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
    private PointService pointService;

    @Autowired
    private HttpSession session;
    
    @Autowired
    private MemberService memberService;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        Member member = (Member) session.getAttribute("loginUser");

        
        if (member != null && member.getAuthLevel() == 9) {
        	System.out.println(member.getNo());
        	System.out.println(member.getAuthLevel());
            pointService.loginInsert(member.getNo());
            return true;
        } else {
            System.out.println("loginUser is null");
            response.setContentType("application/json;charset=UTF-8");
            PrintWriter out = response.getWriter();
            out.print(new ObjectMapper().writeValueAsString(
                new RestResult()
                .setStatus(RestStatus.FAILURE)
                .setErrorCode(ErrorCode.rest.UNAUTHORIZED)
                .setData("권한이 없습니다.")));
            return false;
        }
    }
}
