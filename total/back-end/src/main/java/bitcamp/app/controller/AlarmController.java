package bitcamp.app.controller;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import bitcamp.app.service.AlarmService;
import bitcamp.util.RestResult;
import bitcamp.util.RestStatus;

@RestController
@RequestMapping("/alarm")
public class AlarmController {

  Logger log = LogManager.getLogger(getClass());

  {
    log.trace("AlarmController 생성됨!");
  }

  @Autowired private AlarmService alarmService;

  @GetMapping("{no}")
  public Object alarm(@PathVariable int no) {
    log.info("===> " + alarmService.list(no));

    return new RestResult()
        .setStatus(RestStatus.SUCCESS)
        .setData(alarmService.list(no));
  }

}









