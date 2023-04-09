package bitcamp.app.service.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import bitcamp.app.dao.BoardDao;
import bitcamp.app.service.BoardService;
import bitcamp.app.vo.Board;

@Service
public class DefaultBoardService implements BoardService{

  @Autowired private BoardDao boardDao;

  @Transactional
  @Override
  public void add(Board board) {
    boardDao.insert(board);
  }

  @Override
  public List<Board> list(String keyword) {
    return boardDao.findAll(keyword);
  }

  @Override
  public Board get(int no) {
    return boardDao.findByNo(no);
  }

  @Override
  public List<Board> getByMemberNo(int memberNo) {
    return boardDao.findByMemberNo(memberNo);
  }

  @Override
  public void update(Board board) {

  }

  @Override
  public void delete(int no) {

  }

  @Override
  public List<Board> listHot() {
    return boardDao.findAllHot();
  }

  @Override
  public List<Board> listRecent() {
    return boardDao.findAllRecent();
  }

  @Override
  public List<Board> listFollow(int no) {
    return boardDao.findFollow(no);
  }


}
