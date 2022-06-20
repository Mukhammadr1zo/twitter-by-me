import { Link } from "react-router-dom";

import useLanguage from "../../Hooks/useLanguage";

import UserIcon from "../Lib/Icons/UserIcon";

import "./Recomendation.scss";

const Recomendation = ({ user }) => {
  const [lang] = useLanguage();

  return (
    <li className="recomendation">
      {user.avatar ? (
        <img
          className="recomendation__avatar"
          src={user.avatar}
          alt={user.first_name + " " + user.last_name + "'s avatar"}
          width={50}
          height={50}
        />
      ) : (
        <UserIcon />
      )}

      <div className="recomendation__info">
        <Link className="recomendation__user-name" to={"/profile/" + user.id}>
          {user.first_name + " " + user.last_name}
        </Link>
        <Link className="recomendation__nick-name" to={"/profile/" + user.id}>
          {"@" + user.first_name}
        </Link>
      </div>

      <button className="recomendation__button ">{lang.buttons.followButton}</button>
    </li>
  );
};

export default Recomendation;
