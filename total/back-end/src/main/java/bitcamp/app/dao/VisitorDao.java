package bitcamp.app.dao;

import org.apache.ibatis.annotations.Mapper;
import bitcamp.app.vo.Visitor;

@Mapper
public interface VisitorDao {
  void insert(Visitor visitor);
}
