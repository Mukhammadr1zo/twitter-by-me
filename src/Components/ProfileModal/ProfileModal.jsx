import React from "react";
import useToken from "../../Hooks/useToken";
import "./ProfileModal.scss";

const ProfileModal = ({ isOpen, setIsOpen }) => {
  const [setToken] = useToken(true);

  const removeToken = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("email");
    setToken("");
  };

  return (
    <div className={`profile-edit__modal ${isOpen ? "profile-edit__modal--open" : ""}`}>
      <div className="profile-edit__modal__inner">
        <div className="profile-edit__modal__wrapper">
          <button to="/login" onClick={removeToken}>
            Log out
          </button>

          <button onClick={() => setIsOpen(false)}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
