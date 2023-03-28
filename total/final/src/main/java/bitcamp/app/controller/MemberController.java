package bitcamp.app.controller;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
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
    Member m = new Member();
    Member m2 = new Member();
    Member m3 = new Member();
    Member m4 = new Member();
    Member m5 = new Member();
    Member m6 = new Member();

    List<Member> list = new ArrayList<>();

    m.setNo(1);
    m.setEmail("obh@naver.com");
    m.setNickname("obh");

    m2.setNo(2);
    m2.setEmail("lmj@naver.com");
    m2.setNickname("lmj");

    m3.setNo(3);
    m3.setEmail("lgh@naver.com");
    m3.setNickname("lgh");

    m4.setNo(4);
    m4.setEmail("lgh@naver.com");
    m4.setNickname("lgh");

    m5.setNo(5);
    m5.setEmail("lgh@naver.com");
    m5.setNickname("lgh");

    m6.setNo(6);
    m6.setEmail("lgh@naver.com");
    m6.setNickname("lgh");

    list.add(m);
    list.add(m2);
    list.add(m3);
    list.add(m4);
    list.add(m5);
    list.add(m6);

    return list;
  }

}

