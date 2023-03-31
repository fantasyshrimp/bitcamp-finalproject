package bitcamp.app.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import bitcamp.app.service.ReplyService;
import bitcamp.app.vo.Reply;

@RestController
// @RequestMapping("/member")
@RequestMapping("/api")
public class ReplyController {
  @Autowired private ReplyService replyService;

  @GetMapping("/reply/{no}")
  public List<Reply> view(@PathVariable int no) {

    return replyService.get(no);
  }

}

