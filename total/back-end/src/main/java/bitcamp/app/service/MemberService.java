package bitcamp.app.service;

import java.util.List;
import bitcamp.app.vo.Member;

public interface MemberService {
  void add(Member member);
  List<Member> list(String keyword);
  Member get(String email, String password);
  void update(Member member);
  void delete(int no);
  Member get(int no);
  List<Member> getFollowings(int no);
  List<Member> getFollowers(int no);
}
