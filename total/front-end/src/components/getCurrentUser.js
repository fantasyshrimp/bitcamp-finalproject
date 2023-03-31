import axios from "axios";
axios.defaults.withCredentials = true;

function getCurrentUser(cb) {
  axios
    .get("http://localhost:8080/auth/user")
    .then((response) => {
      if (response.data.status === "success") {
        cb(response.data.data);
      }
    })
    .catch((error) => {
      console.log(error);
      alert("로그인 유저 가져오는 중 오류 발생!");
    });
}

export default getCurrentUser;
