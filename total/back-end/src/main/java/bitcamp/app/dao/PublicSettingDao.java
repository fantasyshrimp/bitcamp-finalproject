package bitcamp.app.dao;

import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import bitcamp.app.vo.Follow;
import bitcamp.app.vo.PublicSetting;

@Mapper
public interface PublicSettingDao {
  void insert(Follow follow);
  void delete(Follow follow);
  List<PublicSetting> getAll(int no);
}
