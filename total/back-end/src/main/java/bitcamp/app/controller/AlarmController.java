package bitcamp.app.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import bitcamp.app.service.AlarmService;
import bitcamp.app.service.LogService;
import bitcamp.app.service.MemberService;
import bitcamp.app.vo.Log;
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
  @Autowired private LogService logService;
  @Autowired private MemberService memberService;

  @GetMapping("{no}")
  public Object alarm(@PathVariable int no) {

    return new RestResult()
        .setStatus(RestStatus.SUCCESS)
        .setData(alarmService.list(no));
  }

  @PostMapping("test/1")
  public Object recordingTest() {
    List<Object> data = new ArrayList<>();
    for (Log l : alarmService.getLogs(12)) {
      Map<String, Object> part = new HashMap<>();
      part.put("user", memberService.get(l.getMemberNo()));
      part.put("log", l);
      data.add(part);
    }

    return data;
  }

}
