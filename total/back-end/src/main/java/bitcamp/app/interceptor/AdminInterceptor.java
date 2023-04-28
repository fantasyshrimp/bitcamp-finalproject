package bitcamp.app.interceptor;
import java.io.PrintWriter;
import java.util.Objects;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import bitcamp.app.service.MemberService;
import bitcamp.app.service.PointService;
import bitcamp.app.vo.Member;
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
    if (isPreflightRequest(request)) {
      response.setStatus(HttpServletResponse.SC_OK);
      return true;
    }

    Member member = (Member) session.getAttribute("loginUser");
    if (member != null && member.getAuthLevel() == 9) {
      return true;
    } else {
      response.setContentType("text/html;charset=UTF-8");
      PrintWriter out = response.getWriter();
      out.print("<script>alert('권한이 없습니다.');history.back();</script>");
      //response.sendRedirect("http://localhost:3000");
      return false;
    }
  }

  private boolean isPreflightRequest(HttpServletRequest request) {
    return isOptions(request) && hasHeaders(request) && hasMethod(request) && hasOrigin(request);
  }


  private boolean isOptions(HttpServletRequest request) {
    return request.getMethod().equalsIgnoreCase(HttpMethod.OPTIONS.toString());
  }

  private boolean hasHeaders(HttpServletRequest request) {
    String headers = request.getHeader("Access-Control-Request-Headers");
    return Objects.nonNull(headers) && !headers.isEmpty();
  }

  private boolean hasMethod(HttpServletRequest request) {
    String method = request.getHeader("Access-Control-Request-Method");
    return Objects.nonNull(method) && !method.isEmpty();
  }

  private boolean hasOrigin(HttpServletRequest request) {
    return Objects.nonNull(request.getHeader("Origin"));
  }
}
