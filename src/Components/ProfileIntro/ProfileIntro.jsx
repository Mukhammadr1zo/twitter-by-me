import UserIcon from "../../Assets/Images/UserIcon.svg";

import "./ProfileIntro.scss";

const ProfileIntro = ({ user }) => {
  return (
    <section className="profile__intro">
      <img
        className="profile__banner"
        src={user.banner || "https://via.placeholder.com/695x210"}
        alt={user.first_name + " " + user.last_name + " profile banner"}
        width={695}
        height={210}
      />

      <img
        className="profile__user-avatar"
        src={user.avatar || UserIcon}
        alt={user.first_name + " " + user.last_name + " 's avatar"}
        width={140}
        height={140}
      />
    </section>
  );
};

export default ProfileIntro;
