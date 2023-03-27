package bitcamp.app.service.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import bitcamp.app.dao.MemberDao;
import bitcamp.app.service.MemberService;
import bitcamp.app.vo.Member;

@Service
public class DefaultMemberService implements MemberService{

  @Autowired private MemberDao memberDao;

  @Transactional
  @Override
  public void add(Member member) {
    memberDao.insert(member);
  }

  @Override
  public List<Member> list(String keyword) {
    return memberDao.findAll();
  }

  @Override
  public void update(Member member) {

  }

  @Override
  public void delete(int no) {

  }

}
