import useLanguage from "../../Hooks/useLanguage";
import TweetIcon from "../Lib/Icons/TweetIcon";
import "./TweetButton.scss";

const TweetButton = () => {
  const [lang] = useLanguage();
  return (
    <button className="tweet-button">
      <TweetIcon/>
      <span className="tweet-button__text">{lang.buttons.tweetButton}</span>
    </button>
  );
};

export default TweetButton;
