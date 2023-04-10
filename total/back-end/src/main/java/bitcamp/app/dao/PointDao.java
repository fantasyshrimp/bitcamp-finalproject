package bitcamp.app.dao;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface PointDao {

  int findPoint(int no);
  void commentInsert(int no);
  void likeInsert(int no);
  void unlikeInsert(int no);
  void boardInsert(int no);
  void loginInsert(int no);
  void signupInsert(int no);

}
