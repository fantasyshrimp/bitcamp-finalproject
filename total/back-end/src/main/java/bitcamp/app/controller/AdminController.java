package bitcamp.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import bitcamp.app.service.MemberService;
import bitcamp.app.service.ObjectStorageService;
import bitcamp.app.vo.Member;
import bitcamp.util.ErrorCode;
import bitcamp.util.RestResult;
import bitcamp.util.RestStatus;

@RestController
@RequestMapping("/admin")
public class AdminController {
  @Autowired private MemberService memberService;

  @Autowired private ObjectStorageService objectStorageService;
  private String bucketName = "bitcamp-bucket04-member-photo";

  @GetMapping()
  public Object test() {
    return memberService.list(null);
  }
  
  @GetMapping("{no}")
  public Object view(@PathVariable int no) {
    Member member = memberService.get(no);
    if (member != null) {
      return new RestResult()
          .setStatus(RestStatus.SUCCESS)
          .setData(member);
    } else {
      return new RestResult()
          .setStatus(RestStatus.FAILURE)
          .setErrorCode(ErrorCode.rest.NO_DATA);
    }
  }

}

