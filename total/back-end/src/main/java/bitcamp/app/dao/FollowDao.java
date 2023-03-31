package bitcamp.app.dao;

import java.util.List;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface FollowDao {
  List<Integer> findAllFollowingNumbers(int no);
  List<Integer> findAllFollowerNumbers(int no);
}
