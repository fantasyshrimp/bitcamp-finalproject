package bitcamp.app.vo;

import java.sql.Date;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonFormat.Shape;
import lombok.Data;

@Data
public class AlarmLog {
  private int no;
  private int typeNo;
  private int userNo;
  private Member otherMember;
  private String content;
  private boolean readFlag;

  @JsonFormat(
      shape = Shape.STRING,
      pattern = "yyyy-MM-dd")
  private Date alarmDate;
}
