import React from "react";

import { Context } from "../Context/LanguageContext";
import languages from "../Localization/Localization";

const useLanguage = () => {
  const ctx = React.useContext(Context);

  return [languages[ctx.language], ctx.setLanguage];
};

export default useLanguage;
