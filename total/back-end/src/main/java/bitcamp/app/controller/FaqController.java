

package bitcamp.app.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import bitcamp.app.service.FaqService;
import bitcamp.app.vo.Faq;

@RestController
@RequestMapping("/faq")
public class FaqController {
  @Autowired private FaqService faqService;

  @GetMapping
  public List<Faq> findFaqType() {

    return faqService.findFaqType();
  }

}