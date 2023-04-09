import React, {useState, useEffect} from "react";
import axios from "axios";
import ImageResizer from "react-image-file-resizer";
import SettingInput from "./SettingInput"

function ModifyProfile(props) {
  const [memberData, setMemberData] = useState({});
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/auth/user")
      .then((response) => {
        setMemberData(response.data.data);        
        setImageUrl(response.data.data.profilePhoto);
      });
  }, []);

  const divStyle = {
    width: '300px',
    height: '300px',
    backgroundColor: 'white',
    position: 'relative',
    cursor: 'pointer',
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }; 
  
  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("profilePhoto", file);
  
    if (file) {
      ImageResizer.imageFileResizer(
        file,
        100,
        100,
        "JPEG",
        100,
        0,
        (uri) => {
          setImageUrl(uri);
        },
        "base64"
      );
      try {
      const response = await axios.put("http://localhost:8080/member/upload/profileImg/" + memberData.no, formData, {
        headers: {
          "Content-Type": "multipart/form-data;",
        },
      });
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div id="setting-feild" style={{ width: "100%", height: "100%",
      color: "white"  
    }}>

      <div style={{ width:"250px", marginLeft: "5%", marginTop: "5%", marginBottom: "3%",
        boxSizing: "border-box", borderBottom: "1px solid rgba(255,255,255,0.5)"
      }}>{props.title}</div>
      
      <div style={{width: "100%", height: "100%",
        display: "flex",  marginLeft: "5%"
      }}>
        <div style={{width: "30%", height: "100%", marginTop: "5%",
          display: "flex", flexDirection: "column"
        }}>
          <div style={divStyle}
            onClick={() => {document.querySelector('input[type=file]#profile-photo').click()}}
          >
            <input id="profile-photo" type="file" accept="image/*" name='profilePhoto' multiple onChange={handleFileUpload} style={{display:"none"}}/>
          </div> 

          <div>사진밑에 이메일</div>
        </div>
        <div style={{width: "60%", height: "100%",
          display: "flex", flexDirection: "column"
        }}>
          <SettingInput title={"비밀번호 수정"} placeholder={"******"}/>
          <SettingInput title={"비밀번호 확인"} placeholder={"******"}/>
          <SettingInput title={"성별"} placeholder={"radio로?"}/>
          <SettingInput title={"생년월일"} placeholder={"ex) 990101"}/>
          <SettingInput title={"전화번호"} placeholder={"010-1234-5678"}/>
          <SettingInput title={"주소"} placeholder={"서울특별시 강남구"}/>

          <div>제출버튼예정</div>
        </div>
      </div>
    </div>
  );
}

export default ModifyProfile;
