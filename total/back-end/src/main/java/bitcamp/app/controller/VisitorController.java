package bitcamp.app.controller;

import java.time.LocalDateTime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import bitcamp.app.service.VisitorService;
import bitcamp.app.vo.Visitor;

@RestController
@RequestMapping("/visitors")
public class VisitorController {

  @Autowired
  private VisitorService visitorService;

  @PostMapping
  public Visitor addVisitor( @RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd / HH:mm:ss") LocalDateTime visitedDt) {
    return visitorService.addVisitor(visitedDt);
  }

}


//  @PostMapping
//  public Visitor addVisitor(@RequestParam String ipAddress, @RequestParam LocalDateTime visitedDt) {
//    return visitorService.addVisitor(ipAddress, visitedDt);
//  }