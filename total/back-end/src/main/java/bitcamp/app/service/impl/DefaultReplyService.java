package bitcamp.app.service.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import bitcamp.app.dao.ReplyDao;
import bitcamp.app.service.ReplyService;
import bitcamp.app.vo.Reply;

@Service
public class DefaultReplyService implements ReplyService{

  @Autowired private ReplyDao replyDao;

  @Override
  public List<Reply> get(int no) {
    return replyDao.findByNo(no);
  }

  @Override
  public void insert(Reply reply) {
    replyDao.insert(reply);
  }
}
