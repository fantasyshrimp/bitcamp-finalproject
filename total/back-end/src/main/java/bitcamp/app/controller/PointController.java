package bitcamp.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import bitcamp.app.service.PointService;

@RestController
@RequestMapping("/point")
public class PointController {
  @Autowired private PointService pointService;

  @GetMapping("{no}")
  public int view(@PathVariable int no) {

    return pointService.findPoint(no);
  }
}


