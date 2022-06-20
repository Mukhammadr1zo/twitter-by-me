import { Route, Routes } from "react-router-dom";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HomePage from "../../Pages/HomePage/HomePage";
import ProfilePage from "../../Pages/ProfilePage/ProfilePage";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";

const AppInner = () => {
  return (
    <div className="app__inner">
      <Header />

      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="profile/:userId" element={<ProfilePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default AppInner;
