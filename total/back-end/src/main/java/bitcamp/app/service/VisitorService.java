package bitcamp.app.service;

import java.time.LocalDateTime;
import bitcamp.app.vo.Visitor;

public interface VisitorService {
  Visitor addVisitor(LocalDateTime visitedDt);
}

//public interface VisitorService {
//  Visitor addVisitor(String ipAddress, LocalDateTime visitedAt);
//}
