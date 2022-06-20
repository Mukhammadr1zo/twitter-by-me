import React from "react";
import useLanguage from "../../Hooks/useLanguage";
import useTheme from "../../Hooks/useTheme";
import SparksIcon from "../Lib/Icons/SparksIcon";


import "./HomePageTop.scss";

const HomePageTop = () => {
  
  const [lang, setLanguage] = useLanguage();
  const [theme, setTheme] = useTheme();

  return (
    <>
     

      <section className={`home__top `}>
        <div className="home__top__inner">
          <h2 className="home__heading">{lang.nav.navItem1}</h2>

          <button className="home__button" name="options" onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}>
            <SparksIcon />
          </button>
          <select onChange={(evt) => setLanguage(evt.target.value)}>
          <option value="en">En</option>
          <option value="ru">Ru</option>
          <option value="uz">Uz</option>
        </select>
        </div>
        
        
      </section>
    </>
  );
};

export default HomePageTop;
