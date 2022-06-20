import SettingsIcon from "../Lib/Icons/SettingsIcon";
import MoreSmallIcon from "../Lib/Icons/MoreSmallIcon";

import useLanguage from "../../Hooks/useLanguage";

import "./FooterTrends.scss";

const FooterTrends = () => {
  const [lang] = useLanguage();

  return (
    <section className="trends">
      <div className="trends__top">
        <h2 className="trends__heading">{lang.trends.trendsHeading}</h2>

        <button className="trends__top__button">
          <SettingsIcon />
        </button>
      </div>

      <ul className="trends__list">
        <li className="trend">
          <div className="trend__top">
            <span className="trend__top__text">Trending in Nigeria</span>

            <button className="trend__top__button" name="more">
              <MoreSmallIcon />
            </button>
          </div>

          <h3 className="trend__title">What's trending</h3>

          <span className="trend__tweets-count">4,238 Tweets</span>
        </li>
        <li className="trend">
          <div className="trend__top">
            <span className="trend__top__text">Trending in Nigeria</span>

            <button className="trend__top__button" name="more">
              <MoreSmallIcon />
            </button>
          </div>

          <h3 className="trend__title">What's trending</h3>

          <span className="trend__tweets-count">4,238 Tweets</span>
        </li>
        <li className="trend">
          <div className="trend__top">
            <span className="trend__top__text">Trending in Nigeria</span>

            <button className="trend__top__button" name="more">
              <MoreSmallIcon />
            </button>
          </div>

          <h3 className="trend__title">What's trending</h3>

          <span className="trend__tweets-count">4,238 Tweets</span>
        </li>
      </ul>

      <div className="trends__bottom">
        <a className="trends__link" href="#link">
          {lang.buttons.showMore}
        </a>
      </div>
    </section>
  );
};

export default FooterTrends;
