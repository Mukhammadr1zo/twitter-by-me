import { Link } from "react-router-dom";

import CommentIcon from "../Lib/Icons/CommentsIcon";
import MoreSmallIcon from "../Lib/Icons/MoreSmallIcon";
import RetweetIcon from "../Lib/Icons/RetweetIcon";
import LikeIcon from "../Lib/Icons/LikeIcon";
import UserIcon from "../Lib/Icons/UserIcon";
import ShareIcon from "../Lib/Icons/ShareIcon";
import StatsSmallIcon from "../Lib/Icons/StatsSmallIcon";

import "./Tweet.scss";

const Tweet = ({ user }) => {
  return (
    <li className="tweet">
      <div className="tweet__inner">
        {user.avatar ? (
          <img className="tweet__user-avatar" src={user.avatar} alt="" width={50} height={50} />
        ) : (
          <UserIcon type="big" />
        )}

        <div className="tweet__content">
          <div className="tweet__top">
            <div className="tweet__top__left">
              <Link className="tweet__name" to={"/profile/" + user.id}>
                {user.first_name + " " + user.last_name}
              </Link>
              <span className="tweet__user-name">@inner</span>
              <span className="tweet__activity">25m</span>
            </div>

            <button className="tweet__top__button">
              <MoreSmallIcon />
            </button>
          </div>

          <p className="tweet__description">
            YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda. Mentorlik davomida talaba
            va yangi bitiruvchilarni o’sayotganini ko’rib hursand bo’ladi odam.
          </p>

          {user.image ? (
            <img className="tweet__image" src={user.image} alt="" width={595} height={595} />
          ) : null}

          <ul className="tweet__list">
            <li className="tweet__item">
              <button className="tweet__item__button" name="comments">
                <CommentIcon />
              </button>
            </li>

            <li className="tweet__item">
              <button className="tweet__item__button" name="retweet">
                <RetweetIcon />
              </button>
            </li>

            <li className="tweet__item">
              <button className="tweet__item__button" name="likes">
                <LikeIcon />
              </button>
            </li>

            <li className="tweet__item">
              <button className="tweet__item__button" name="share">
                <ShareIcon />
              </button>
            </li>

            <li className="tweet__item">
              <button className="tweet__item__button" name="share">
                <StatsSmallIcon />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </li>
  );
};

export default Tweet;
