package bitcamp.app.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import bitcamp.app.dao.FollowDao;
import bitcamp.app.dao.MemberDao;
import bitcamp.app.service.MemberService;
import bitcamp.app.vo.Member;

@Service
public class DefaultMemberService implements MemberService {

  Logger log = LogManager.getLogger(getClass());

  @Autowired private MemberDao memberDao;
  @Autowired private FollowDao followDao;

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
  public Member get(String email, String password) {
    Map<String,Object> paramMap = new HashMap<>();
    paramMap.put("email", email);
    paramMap.put("password", password);

    log.debug(paramMap.toString());

    return memberDao.findByEmailAndPassword(paramMap);
  }

  @Override
  public Member getByEmail(String email) {
    return memberDao.findByEmail(email);
  }

  @Override
  public Member getByNickname(String nickname) {
    return memberDao.findByNickname(nickname);
  }

  @Override
  public void update(Member member) {

  }

  @Override
  public void delete(int no) {

  }
  @Override
  public Member get(int no) {
    return memberDao.findByNo(no);
  }

  @Override
  public List<Member> getFollowings(int no) {
    List<Member> memberList = new ArrayList<>();
    followDao.findAllFollowingNumbers(no).forEach((followingNo) -> {
      memberList.add(get(followingNo));
    });
    return memberList;
  }

  @Override
  public List<Member> getFollowers(int no) {
    List<Member> memberList = new ArrayList<>();
    followDao.findAllFollowerNumbers(no).forEach((followerNo) -> {
      memberList.add(get(followerNo));
    });
    return memberList;
  }




}
