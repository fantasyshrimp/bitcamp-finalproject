package bitcamp.app.vo;

import java.sql.Date;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonFormat.Shape;
import lombok.Data;

@Data
public class Reply {
  private int replyNo;
  private int boardNo;
  private String content;
  private int memberNo;
  private Member writer;

  @JsonFormat(
      shape = Shape.STRING,
      pattern = "yyyy-MM-dd")
  private Date writeDt;
}
