package react.test.service.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import react.test.dao.MemberDao;
import react.test.service.MemberService;
import react.test.vo.Member;

@Service
public class DefaultMemberService implements MemberService{
  @Autowired private MemberDao memberDao;

  @Override
  public List<Member> list() {
    return memberDao.findAll();
  }
}
