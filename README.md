<p align="center"><img src="title.PNG" height="180px" width="250px"></p>

# Artify

> **네이버 클라우드 캠프 1기** <br/> 개발 기간 : 2023-03-02 ~ 2023-05-04

## 멤버 구성

- 신지윤 [@zyoonshin](https://github.com/zyoonshin)
  - Home, Admin(Interceptor, 관리 페이지), README 관리, 포트폴리오 관리
- 오병현 [@ohbyunghyun](https://github.com/ohbyunghyun)
  - Feed, Search, 서버 배포
- 윤종광 [@jongkwangyun](https://github.com/jongkwangyun)
  - Home, Log in / out, Alarm, AI Service, 일정 관리,
- 전태산 [@fshrimp](https://github.com/fantasyshrimp)
  - Profile, Personal Setting, 시연 영상 촬영 및 편집
- 한대호 [@das7945](https://github.com/das7945)
  - FAQ, Admin(통계 페이지)

## 소개

> 기록하고 싶은 생각 및 기억을 AI그림 기술을 통해 다른 사람과 공유하고 소통 할 수 있는 SNS서비스

## 주제 선정 이유

> 인스타, 페이스북 같은 sns는 있지만, 이는 작성자가 본인이 표현하고 싶은 내용을 **글로 표현**하는 플랫폼 입니다. 그러나 Artify는 본인이 표현하고 싶은 내용을 입력창에 입력하면, AI가 이를 **그림으로 표현**해줍니다. <br /><br /> Artify는 그림으로 사용자 간의 자유로운 의사 소통과 정보공유 등을 통해 사회적 관계를 생성하고 소통을 강화시켜주는 온라인 플랫폼 입니다.

## Stacks

### Back-end

<a href="#"><img src="https://img.shields.io/badge/Java-007396?style=flat-square&logo=java&logoColor=white"></a>
<a href="#"><img src="https://img.shields.io/badge/Spring-6DB33F?style=flat-square&logo=Spring&logoColor=white"></a>
<a href="#"><img src="https://img.shields.io/badge/Spring Boot-6DB33F?style=flat-square&logo=Spring Boot&logoColor=white"></a>
<a href="#"><img src="https://img.shields.io/badge/MYSQL-4479A1?style=flat-square&logo=MYSQL&logoColor=white"></a>
<a href="#"><img src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=Python&logoColor=white"></a>
<a href="#"><img src="https://img.shields.io/badge/Naver Cloud Platform-03C75A?style=flat-square&logo=Naver&logoColor=white"></a>

### Front-end

<a href="#"><img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=hTML5&logoColor=white"></a>
<a href="#"><img src="https://img.shields.io/badge/CSS-1572B6?style=flat-square&logo=css3&logoColor=white"></a>
<a href="#"><img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black"></a>
<a href="#"><img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"></a>
<a href="#"><img src="https://img.shields.io/badge/React Bootstrap-61DAFB?style=flat-square&logo=React&logoColor=black"></a>

### Tools

ChatGPT
<a href="#"><img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white"/></a>
<a href="#"><img src="https://img.shields.io/badge/Eclipse IDE-2C2255?style=flat-square&logo=Eclipse IDE&logoColor=white"></a>
<a href="#"><img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=flat-square&logo=Visual Studio Code&logoColor=white"></a>
<a href="#"><img src="https://img.shields.io/badge/Postman-FF6C37?style=flat-square&logo=Postman&logoColor=white"/></a>
<a href="#"><img src="https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=Figma&logoColor=white"/></a>
<a href="#"><img src="https://img.shields.io/badge/Naver Cloud Platform-03C75A?style=flat-square&logo=Naver&logoColor=white"></a>

## Naver Cloud ☁️

- VPC
- Server
- Object Storage
- Cloud DB for MySQL
- GPU Server

## AI Service 💻

- Stable Diffusion API
- CLOVA Summary (Naver Cloud AI Service)
- Papago Translation (Naver Cloud AI Service)

## Prototype

> Figma : https://www.figma.com/file/UwoJlyVR5gidLHMGsa1caY/Untitled?t=Ne6edFYJB6gtG90N-0<br />
> use-case : https://www.figma.com/file/OqWG6u7P5kjgVNeTgq2srb/Untitled?type=whiteboard&node-id=0-1&t=AZC4dSmGefhmdHLO-0

## ERD

<img src="dbImage.png">

## 기능

### Home

- Background 동영상 자동 재생
- 반응형 웹 구현
- 이미지 팝업 효과
- 스크롤 효과
- bootstrap 사용

### Feed

- 무작위로 게시물 보이기
- 좋아요 수 높은 순으로 게시물 보이기
- 최근에 작성된 게시글 순으로 게시물 보이기
- 내가 팔로우 한 회원의 게시글만 보이기

### Feed Modal

- 작성자 팔로우 / 언팔로우
- 게시물 좋아요 / 좋아요 취소
- 댓글 작성 / 수정 / 삭제 / 신고
- 게시글 태그
- 작성일
- 작성자 본인일 경우, 게시글 삭제
- react bootstrap 사용

### FAQ

- 자주 묻는 질문들
- 주제 별로 FAQ를 드롭다운으로 등장
- react bootstrap 사용

### Search

- 게시글을 기준으로 검색 단어가 들어있는 지 검색

### Alarm

- 팔로워가 신규 게시글 작성 시 알람 발생
- 다른 회원이 내 게시글 좋아요 클릭 시 알람 발생
- 다른 회원이 내 게시글에 댓글 작성 시 알람 발생
- 다른 회원이 내 댓글을 좋아요 클릭 시 알람 발생
- 다른 회원이 나를 팔로우 시 알람 발생
- react bootstrap 사용

### Log In / Out

- 회원가입
  - 이메일 중복 확인
  - Naver Developer 이용
    - 네이버 연동 회원가입
    - 네이버 인증 메일 발송
  - 비밀번호 시
- 로그인 기능
  - 이메일 또는 비밀번호가 틀릴 시, 알람 발생
  - 로그인 오류 발생 시, 알람 발생
  - 이메일(이메일 형식 확인)
  - 이메일 미인증 회원이 로그인 시, 메일 인증 확인 알람 발생
  - 네이버 연동 로그인
  - 비밀번호 설정 시, 영어, 숫자를 포함해 총 10글자 이상으로 제한
- 로그아웃
- sweet alert 사용

### Profile

- 팔로잉 수, 팔로워 수, 좋아요 수, 포인트 수
- 내가 작성한 게시글 관리
- 내가 팔로잉 한 회원 팔로잉 관리
- 내가 팔로우 한 회원 팔로우 관리

### Personal Setting

- 프로필 수정(닉네임, 자기소개, 비밀번호 수정, 성별, 생년월일, 전화번호, 주소)
- 공개 설정(성별, 생일, 전화번호, 주소, 게시물, 좋아요 및 조회수, 댓글)
- 알람 설정(게시글 작성, 게시글 좋아요, 댓글 작성, 댓글 좋아요, 팔로우)
- 전체 알람 조회

### Admin

- Interceptor
  - 관리자 계정일 경우, 관리자 페이지 및 통계 페이지 접속 가능
  - 관리자 계정이 아닐 경우, sweetalert을 띄워 접속 불가능 및 메인 페이지로 이동
- 관리 페이지
  - 회원 관리(회원 목록 요청, 계정 상태 변경)
  - 게시물 관리(게시글 목록 요청, 게시글 삭제, CLOVA Summary, Papago Translation)
  - 댓글 관리(댓글 목록 요청)
  - react bootstrap 사용
- 통계 페이지
  - 방문자 주간 조회
  - 콘텐츠 일별 조회
  - Chart.js 사용

### 회원 가입

- 메일 중복 확인, 닉네임 중복 확인, 비밀번호 양식 확인 (윤종광)
- 인증 안내 Alert, 인증 메일 발송, 네이버 계정 토큰 승인 (윤종광)

### 로그인

- 계정 상태 확인, 비밀번호 확인 (윤종광)

### 피드

- 게시글 정렬, 게시글 검색, 게시글 미리보기 (오병현)

### 게시글

- 게시글 이미지 생성 (Stable Diffusion in GPU Server) (윤종광)
- 게시글 태그 생성, 게시글 상세보기, 게시글 신고, 게시글 삭제 (오병현)
- 게시글 좋아요 (전태산)

### 댓글

- 댓글 작성, 댓글 삭제, 댓글 좋아요, 댓글 신고 (오병현)

### 포인트

- 포인트 수급, 포인트 기부, 포인트 로그 (오병현)

### 프로필

- 팔로우 리스트 확인, 팔로우/언팔로우, 프로필 이동 (전태산)
- 프로필 이미지 수정, 닉네임 변경, 개인정보 수정 (전태산)

### 설정

- 공개 설정, 알람 설정 (전태산)
- 알람로그 확인 (윤종광/전태산)

### FAQ

- FAQ 목록 작성, FAQ 내용 작성 (한대호)

### Admin

- 회원목록, 회원 계정 상태 관리 (신지윤)
- 게시글 목록, 게시글 상세 정보, 게시글 삭제 (신지윤)
- 댓글 목록 (신지윤)
- 일간 방문자 조회, 일간 콘텐츠 조회 (한대호)

### UI

- UI 구성 : 한대호, 윤종광, 전태산, 오병현, 신지윤
- 메인 페이지 디자인 및 구현 - 신지윤, 윤종광
- Navbar 디자인 및 구현 (윤종광)
- Footer 디자인 및 구현 (오병현)
- 다크모드 색상 설정 (윤종광)
- 반응형 UI 설정 (윤종광)
