package react.test.dao;

import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import react.test.vo.Member;
@Mapper
public interface MemberDao {
  List<Member> findAll();
}
