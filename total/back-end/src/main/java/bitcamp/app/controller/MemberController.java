package bitcamp.app.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import bitcamp.app.service.BoardService;
import bitcamp.app.service.FollowService;
import bitcamp.app.service.LikeService;
import bitcamp.app.service.MemberService;
import bitcamp.app.service.ObjectStorageService;
import bitcamp.app.vo.Board;
import bitcamp.app.vo.Member;
import bitcamp.util.ErrorCode;
import bitcamp.util.RestResult;
import bitcamp.util.RestStatus;
import jakarta.servlet.http.HttpSession;

@RestController
@RequestMapping("/member")
public class MemberController {
  @Autowired private MemberService memberService;
  @Autowired private FollowService followService;
  @Autowired private LikeService likeService;
  @Autowired private BoardService boardService;

  @Autowired private ObjectStorageService objectStorageService;
  private String bucketName = "bitcamp-bucket04-member-photo";

  @PostMapping
  public void insert(@RequestBody Member member) {
  
  }

  @GetMapping("{no}")
  public Object view(@PathVariable int no) {
    Map<String, Object> data = new HashMap<>();
    data.put("member", memberService.get(no));

    List<Board> list = boardService.getByMemberNo(no);
    for (Board b : list) {
      b.setLikeCnt(likeService.countLiker(b.getBoardNo(), "board"));
    }
    data.put("boards", list);
    //Following List는 실시간 변경이 필요하니 followController로 이동
    //data.put("followingList", memberService.getFollowings(no));
    data.put("followerList", memberService.getFollowers(no)); //얘는 실시간 변경이 필요없을까
    data.put("followingCount", followService.getFollowingCount(no));
    data.put("followerCount", followService.getFollowerCount(no));

    return new RestResult()
        .setStatus(RestStatus.SUCCESS)
        .setData(data);
  }

  @PutMapping("upload/profileImg/{no}")
  public Object update(@PathVariable int no,
      MultipartFile profilePhoto,
      HttpSession session
      ) throws Exception {

    Member loginUser = (Member) session.getAttribute("loginUser");

    if (loginUser == null) {
      return new RestResult()
          .setStatus(RestStatus.FAILURE)
          .setErrorCode(ErrorCode.rest.UNAUTHORIZED)
          .setData("로그인 요망");
    }

    String filename = objectStorageService.uploadFile(bucketName, "", profilePhoto);
    if (filename == null) {
      System.out.println("파일명 null");
    }

    objectStorageService.deleteFile(loginUser.getProfilePhoto());

    //"https://kr.object.ncloudstorage.com/bitcamp-bucket04-member-photo/"
    loginUser.setProfilePhoto("https://kr.object.ncloudstorage.com/bitcamp-bucket04-member-photo/" + filename);


    memberService.updateProfilePhoto(loginUser);
    return new RestResult()
        .setStatus(RestStatus.SUCCESS);
  }

}

