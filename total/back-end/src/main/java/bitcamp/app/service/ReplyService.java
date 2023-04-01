package bitcamp.app.service;

import java.util.List;
import bitcamp.app.vo.Reply;

public interface ReplyService {
  List<Reply> get(int no);
  void insert(Reply reply);
}
