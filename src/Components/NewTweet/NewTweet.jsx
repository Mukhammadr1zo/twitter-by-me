import useLanguage from "../../Hooks/useLanguage";

import TweetButton from "../TweetButton/TweetButton";
import UserIcon from "../Lib/Icons/UserIcon";
import MediaIcon from "../Lib/Icons/MediaIcon";
import GifIcon from "../Lib/Icons/GifIcon";
import StatsIcon from "../Lib/Icons/StatsIcon";
import EmojiIcon from "../Lib/Icons/EmojiIcon";
import HistoryIcon from "../Lib/Icons/HistoryIcon";

import "./NewTweet.scss";

const NewTweet = () => {
  const [lang] = useLanguage();

  return (
    <section className="new-tweet">
      <div className="new-tweet__top">
        <UserIcon />

        <input className="new-tweet__input" type="text" placeholder={lang.newTweet.placeholder} />
      </div>

      <div className="new-tweet__bottom">
        <ul className="new-tweet__list">
          <li className="new-tweet__item">
            <button className="new-tweet__item__button">
              <MediaIcon />
            </button>
          </li>
          <li className="new-tweet__item">
            <button className="new-tweet__item__button">
              <GifIcon />
            </button>
          </li>
          <li className="new-tweet__item">
            <button className="new-tweet__item__button">
              <StatsIcon />
            </button>
          </li>
          <li className="new-tweet__item">
            <button className="new-tweet__item__button">
              <EmojiIcon />
            </button>
          </li>
          <li className="new-tweet__item">
            <button className="new-tweet__item__button">
              <HistoryIcon />
            </button>
          </li>
        </ul>

        <TweetButton />
      </div>
    </section>
  );
};

export default NewTweet;
