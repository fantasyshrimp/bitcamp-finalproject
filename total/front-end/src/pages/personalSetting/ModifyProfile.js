import React, {useState, useEffect} from "react";
import axios from "axios";
import ImageResizer from "react-image-file-resizer";

function ModifyProfile(props) {
  let member = {};
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/auth/user")
      .then((response) => {
        member = response.data.data;
        console.log(member);
        setImageUrl(member.profilePhoto);
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
      const response = await axios.put("http://localhost:8080/member/upload/profileImg/" + 12, formData, {
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

      <div style={{ width:"250px", marginLeft: "5%", marginTop: "5%",
        boxSizing: "border-box", borderBottom: "1px solid rgba(255,255,255,0.5)"
      }}>{props.title}</div>
      
      <div style={{width: "100%", height: "100%",
        display: "flex", justifyContent: "center"
      }}>
        프로필설정페이지임니당
        <div style={divStyle}
          onClick={() => {document.querySelector('input[type=file]#profile-photo').click()}}
        >
          <input id="profile-photo" type="file" accept="image/*" name='profilePhoto' multiple onChange={handleFileUpload} style={{display:"none"}}/>
        </div> 
      </div>
    </div>
  );
}

export default ModifyProfile;
