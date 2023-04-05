package bitcamp.app.vo;

import lombok.Data;

@Data
public class PublicSetting {
  private int memberNo;
  private int typeNo;
  private String title;
  private String description;
  private int rangeNo;
  private int rangeState;
}
