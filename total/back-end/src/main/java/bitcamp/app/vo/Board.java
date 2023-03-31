package bitcamp.app.vo;

import java.sql.Date;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonFormat.Shape;
import lombok.Data;

@Data
public class Board {
  private int boardNo;
  private int writerNo;
  private String writerName;
  private String writerPic;
  private String originContent;
  private String transContent;
  private String tag;
  private int likeCnt;
  private int viewCnt;
  private int boardPublic;
  private int replyPublic;
  private int reportCnt;
  private int photoNo;
  private String fileName;


  @JsonFormat(
      shape = Shape.STRING,
      pattern = "yyyy-MM-dd")
  private Date writeDt;

  @JsonFormat(
      shape = Shape.STRING,
      pattern = "yyyy-MM-dd")
  private Date updateDt;

  @JsonFormat(
      shape = Shape.STRING,
      pattern = "yyyy-MM-dd")
  private Date replyWriteDt;
}
