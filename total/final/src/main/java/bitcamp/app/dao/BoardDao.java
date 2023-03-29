package bitcamp.app.dao;

import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import bitcamp.app.vo.Board;

@Mapper
public interface BoardDao {
  void insert(Board m);
  List<Board> findAll(String keyword);
  Board findByNo(int no);
  List<Board> findByMemberNo(int no);
  int update(Board m);
  int delete(int no);
}
