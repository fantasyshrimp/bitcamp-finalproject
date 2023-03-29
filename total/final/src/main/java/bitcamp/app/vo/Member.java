package bitcamp.app.vo;

import java.io.Serializable;
import java.sql.Date;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonFormat.Shape;
import lombok.Data;

@Data
public class Member implements Serializable {
  private static final long serialVersionUID = 1L;

  private int no;
  private String nickname;
  private String email;
  private String password;
  private int gender;
  private String profilePhoto;
  private String basicAddress;
  private int point;
  private String information;
  private String tel;
  private int accountState;
  private int authLevel;
  private String birthDate;

  @JsonFormat(
      shape = Shape.STRING,
      pattern = "yyyy-MM-dd")
  private Date createdDate;

  @JsonFormat(
      shape = Shape.STRING,
      pattern = "yyyy-MM-dd")
  private Date passwordDate;
}
