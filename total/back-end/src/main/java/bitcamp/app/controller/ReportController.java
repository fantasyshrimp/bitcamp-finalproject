package bitcamp.app.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import bitcamp.app.service.ReportService;
import bitcamp.app.vo.Report;

@RestController
@RequestMapping("/report")
public class ReportController {
  @Autowired private ReportService reportService;

  @GetMapping
  public List<Report> findReportType() {

    return reportService.findReportType();
  }

}


