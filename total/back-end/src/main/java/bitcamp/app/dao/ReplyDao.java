package bitcamp.app.dao;

import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import bitcamp.app.vo.Reply;

@Mapper
public interface ReplyDao {
  List<Reply> findByNo(int no);
}
