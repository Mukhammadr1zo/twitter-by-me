import React from "react";
import { Link } from "react-router-dom";

import ArrowIcon from "../Lib/Icons/ArrovIcon";

import "./ProfilePageTop.scss";

const ProfilePageTop = ({ userState }) => {
  React.useEffect(() => {
    document.title = "Twitter";
  },[]);

  return (
    <div className="profile__top">
      <Link className="profile__top__link" to={-1}>
        <ArrowIcon />
      </Link>

      <div className="profile__top__inner">
        <h2 className="profile__top__heading">
          {userState.first_name + " " + userState.last_name}
        </h2>

        <span className="profile__top__text">1,200 Tweets</span>
      </div>
    </div>
  );
};

export default ProfilePageTop;
