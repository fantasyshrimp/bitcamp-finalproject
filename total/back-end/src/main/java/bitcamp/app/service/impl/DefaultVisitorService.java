package bitcamp.app.service.impl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import bitcamp.app.dao.VisitorDao;
import bitcamp.app.service.VisitorService;
import bitcamp.app.vo.Visitor;

@Service
public class DefaultVisitorService implements VisitorService {

  @Autowired
  private VisitorDao visitorDao;

  @Override
  public void add(Visitor visitor) {
    visitorDao.insert(visitor);
  }
}

//  @Override
//  public Visitor addVisitor(String ipAddress, LocalDateTime visitedDt) {
//    Visitor visitor = new Visitor();
//    visitor.setIpAddress(ipAddress);
//    visitor.setVisitedDt(visitedDt);
//    return visitorDao.save(visitor);
//  }