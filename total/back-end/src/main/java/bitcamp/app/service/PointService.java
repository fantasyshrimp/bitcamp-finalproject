package bitcamp.app.service;

public interface PointService {

  int findPoint(int no);
  void commentInsert(int no);
  void likeInsert(int no);
  void unlikeInsert(int no);
  void boardInsert(int no);
  void loginInsert(int no);
  void signupInsert(int no);

}
