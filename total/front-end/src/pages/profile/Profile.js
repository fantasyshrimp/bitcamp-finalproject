import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import axios from "axios";
import ProfileUpper from "./ProfileUpper";
import ProfileUnder from "./ProfileUnder";

function Profile() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
 
  const location = useLocation();
  const { no } = location.state || {};

  let memberNo = no ? no : 5;
  console.log(no +"프로필 로드됨");
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/" + memberNo)
      .then((response) => {
        setData(response["data"]["data"]);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, [memberNo]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <ProfileUpper member={data["member"]} followings={data["followingList"]} followers={data["followerList"]} />
      <ProfileUnder boards={data["boards"]} />
    </>
  );
}

export default Profile;
