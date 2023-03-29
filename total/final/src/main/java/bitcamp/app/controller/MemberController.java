package bitcamp.app.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import bitcamp.app.service.MemberService;
import bitcamp.app.vo.Member;

@RestController
// @RequestMapping("/member")
public class MemberController {
  @Autowired private MemberService memberService;

  @PostMapping
  public void insert(@RequestBody Member member) {
    memberService.add(member);
  }

  @GetMapping("/api/hello")
  public String test() {
    return "Artify";
  }

  @GetMapping("/api/test")
  public List<Member> test2() {
    return null;
  }

  @GetMapping("/api/{no}")
  public Object view(@PathVariable int no) {
    return memberService.get(no);
  }

}

