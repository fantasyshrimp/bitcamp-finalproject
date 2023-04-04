package bitcamp.app.controller;

import java.util.HashMap;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import bitcamp.app.service.BoardService;
import bitcamp.app.service.FollowService;
import bitcamp.app.service.MemberService;
import bitcamp.app.vo.Member;
import bitcamp.util.RestResult;
import bitcamp.util.RestStatus;

@RestController
// @RequestMapping("/member")
public class MemberController {
  @Autowired private MemberService memberService;
  @Autowired private FollowService followService;
  @Autowired private BoardService boardService;

  @PostMapping
  public void insert(@RequestBody Member member) {
    memberService.add(member);
  }

  @GetMapping("/api/hello")
  public String test() {
    return "Artify";
  }

  @GetMapping("/member/{no}")
  public Object view(@PathVariable int no) {
    Map<String, Object> data = new HashMap<>();
    data.put("member", memberService.get(no));
    data.put("boards", boardService.getByMemberNo(no));
    //Following List는 실시간 변경이 필요하니 followController로 이동
    //data.put("followingList", memberService.getFollowings(no));
    data.put("followerList", memberService.getFollowers(no)); //얘는 실시간 변경이 필요없을까
    data.put("followingCount", followService.getFollowingCount(no));
    data.put("followerCount", followService.getFollowerCount(no));

    return new RestResult()
        .setStatus(RestStatus.SUCCESS)
        .setData(data);
  }

}

