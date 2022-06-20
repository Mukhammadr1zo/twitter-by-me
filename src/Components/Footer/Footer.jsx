import FooterInput from "../FooterSearch/FooterSearch";
import FooterTrends from "../FooterTrends/FooterTrends";
import Recomendations from "../Recomendations/Recomendations";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <FooterInput />
      <FooterTrends />
      <Recomendations />
    </footer>
  );
};

export default Footer;
