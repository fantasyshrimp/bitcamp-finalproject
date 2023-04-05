package bitcamp.app.vo;

import java.sql.Date;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonFormat.Shape;
import lombok.Data;

@Data
public class Report {
  private int boardNo;
  private int replyNo;
  private int memberNo;
  private int reportNo;
  private String reportType;
  private String content;

  @JsonFormat(
      shape = Shape.STRING,
      pattern = "yyyy-MM-dd")
  private Date reportDt;
}
