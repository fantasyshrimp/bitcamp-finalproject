package bitcamp.app.service;

import java.util.List;
import bitcamp.app.vo.Teacher;

public interface TeacherService {
  void add(Teacher teacher);
  List<Teacher> list();
  Teacher get(int no);
  Teacher get(String email, String password);
  void update(Teacher teacher);
  void delete(int no);
}





