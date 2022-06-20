import React from "react";
import MoreSmallIcon from "../Lib/Icons/MoreSmallIcon";
import UserIcon from "../Lib/Icons/UserIcon";

import useUser from "../../Hooks/useUser";

import "./Profile.scss";

const Profile = ({ setIsOpen }) => {
  const [user] = useUser();

  return (
    <div className="profile" onClick={() => setIsOpen(true)}>
      <div className="profile__wrapper">
        {user.avatar ? (
          <img
            className="user-icon"
            src={user.avatar}
            alt={user.first_name + " " + user.last_name + "'s avatar"}
            width={40}
            height={40}
          />
        ) : (
          <UserIcon className="profile__avatar" type={"small"} />
        )}

        <div className="profile__inner">
          <h3 className="profile__name">
            {user.id ? user.first_name + " " + user.last_name : "My profile"}
          </h3>
          <p className="profile__user-name">{user.id ? "@" + user.first_name : "@profile"}</p>
        </div>

        <MoreSmallIcon />
      </div>
    </div>
  );
};

export default Profile;
