package bitcamp.app.controller;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import bitcamp.app.service.MemberService;

@RestController
@RequestMapping("/alarm")
public class AlarmController {

  Logger log = LogManager.getLogger(getClass());

  {
    log.trace("AlarmController 생성됨!");
  }

  @Autowired private MemberService memberService;

  @GetMapping("{no}")
  public Object alarm(@PathVariable int no) {
    //    Member member = memberService.getAlarm(no);
    //
    //    if (member != null) {
    //      return new RestResult()
    //          .setData(member)
    //          .setStatus(RestStatus.SUCCESS);
    //    } else {
    //      return new RestResult()
    //          .setData(ErrorCode.rest.NO_DATA)
    //          .setStatus(RestStatus.FAILURE);
    //    }
    return null;
  }

}









