package bitcamp.app.vo;

import java.time.LocalDateTime;
import lombok.Data;

@Data
public class Visitor {
  private Long id;
  private LocalDateTime visitedDt;
}

//  private String ipAddress;