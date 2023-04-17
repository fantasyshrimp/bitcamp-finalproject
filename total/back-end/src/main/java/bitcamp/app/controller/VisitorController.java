package bitcamp.app.controller;


import java.time.LocalDateTime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import bitcamp.app.service.VisitorService;
import bitcamp.app.vo.Visitor;


@RestController
@RequestMapping("/visitors")
public class VisitorController {

  @Autowired
  private VisitorService visitorService;

  @PostMapping
  public Visitor add() {
    Visitor visitor = new Visitor();
    visitor.setVisitorDt(LocalDateTime.now());
    visitorService.add(visitor);
    return visitor;
  }
  //  @PostMapping(consumes = "application/json")
  //  public Visitor add(@RequestBody Visitor visitor) {
  //    visitorService.add(visitor);
  //    return visitor;
  //  }

}
