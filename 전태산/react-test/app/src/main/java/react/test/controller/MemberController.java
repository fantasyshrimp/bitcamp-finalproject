package react.test.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import react.test.service.MemberService;
import react.util.RestResult;

@RestController
@RequestMapping("/members")
public class MemberController {

  @Autowired private MemberService memberService;

  @GetMapping
  public Object list(String keyword) {
    return new RestResult()
        .setStatus("success")
        .setData(memberService.list());
  }
}
