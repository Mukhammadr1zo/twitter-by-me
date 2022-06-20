import HomePageTop from "../../Components/HomePageTop/HomePageTop";
import NewTweet from "../../Components/NewTweet/NewTweet";
import Tweets from "../../Components/Tweets/Tweets";

const HomePage = () => {
  return (
    <div className="main main--home">
      <HomePageTop />
      <NewTweet />
      <Tweets />
    </div>
  );
};

export default HomePage;
