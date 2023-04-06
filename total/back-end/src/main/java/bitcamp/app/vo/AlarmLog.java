package bitcamp.app.vo;

import java.time.LocalDateTime;
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
//  private Board board;
  
  @JsonFormat(
      shape = Shape.STRING,
      pattern = "yyyy-MM-dd HH:mm:ss")
  private LocalDateTime alarmDate;
}
