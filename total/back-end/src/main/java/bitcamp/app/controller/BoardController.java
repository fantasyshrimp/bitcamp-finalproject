package bitcamp.app.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import bitcamp.app.service.BoardService;
import bitcamp.app.vo.Board;
import bitcamp.app.vo.Member;

@RestController
// @RequestMapping("/member")
@RequestMapping("/boards")
public class BoardController {
  @Autowired private BoardService boardService;

  @PostMapping
  public void insert(@RequestBody Member member) {

  }

  @GetMapping
  public List<Board> list(String keyword) {

    return boardService.list(keyword);
  }

  @GetMapping("{no}")
  public Board view(@PathVariable int no) {

    return boardService.get(no);
  }

}

