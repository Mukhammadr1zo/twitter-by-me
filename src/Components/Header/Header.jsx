import React from "react";
import { Link } from "react-router-dom";

import TwitterIcon from "../Lib/Icons/TwitterIcon";
import Nav from "../Nav/Nav";
import Profile from "../Profile/Profile";
import ProfileModal from "../ProfileModal/ProfileModal";
import TweetButton from "../TweetButton/TweetButton";

import "./Header.scss";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="header">
      <div className="header__inner">
        <Link className={"header__link"} to="">
          <span className="header__link__inner">
            <TwitterIcon setClass={"header__logo"} />
          </span>
        </Link>

        <Nav />

        <TweetButton />
      </div>

      <div className="header__bottom">
        <Profile setIsOpen={setIsOpen} />
        <ProfileModal isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </header>
  );
};

export default Header;
