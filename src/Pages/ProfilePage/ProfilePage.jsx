import React from "react";
import { useParams } from "react-router-dom";

import ProfilePageTop from "../../Components/ProfilePageTop/ProfilePageTop";
import ProfileIntro from "../../Components/ProfileIntro/ProfileIntro";

import LoadingIcon from "../../Components/Lib/Loading/LoadingIcon";

const ProfilePage = () => {
  const { userId } = useParams();

  const [userState, setUserState] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      const res = await fetch("https://reqres.in/api/users/" + userId);

      const data = await res.json();

      if (data?.data) {
        setUserState(data?.data);
        setLoading(false);
      }
    })();
  }, [userId]);
  document.title =
    userState.first_name + " " + userState.last_name + " (@" + userState.first_name + ")";

  return (
    <div className="main">
      {userState.id && <ProfilePageTop userState={userState} />}

      {userState.id && <ProfileIntro user={userState} />}

      {loading && <LoadingIcon />}
    </div>
  );
};

export default ProfilePage;
