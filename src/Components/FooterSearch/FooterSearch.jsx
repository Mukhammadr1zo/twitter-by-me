import "./FooterSearch.scss";
import useLanguage from "../../Hooks/useLanguage";

const FooterInput = () => {
  const [lang] = useLanguage();

  return <input className="footer__input" type="text" name="search" placeholder={lang.searchInput} />;
};

export default FooterInput;
