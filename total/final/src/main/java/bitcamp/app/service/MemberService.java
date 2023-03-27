package bitcamp.app.service;

import java.util.List;
import bitcamp.app.vo.Member;

public interface MemberService {
  void add(Member member);
  List<Member> list(String keyword);
  void update(Member member);
  void delete(int no);
}
