import "./Icons.scss";

const UserIcon = ({ type = "big" }) => {
  return (
    <>
      {type === "small" ? (
        <svg
          className="user-icon small"
          width="40"
          height="40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="20" cy="20" r="20" fill="#E3E8EA" />
          <mask id="user-icon" maskUnits="userSpaceOnUse" x="1" y="1" width="38" height="38">
            <circle cx="20" cy="20" r="18.03" fill="#E2E8EA" stroke="#000" strokeWidth="1.27" />
          </mask>
          <g mask="url(#user-icon)" fill="#fff">
            <path d="M27.75 17.04a7.7 7.7 0 1 1-15.42 0 7.7 7.7 0 0 1 15.42 0ZM37.38 44.67a17.35 17.35 0 1 0-34.69 0h34.7Z" />
          </g>
        </svg>
      ) : (
        <svg
          className="user-icon"
          data-name="Слой 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
        >
          <defs>
            <mask id="a" x="1.67" y="1.67" width="46.67" height="48.33" maskUnits="userSpaceOnUse">
              <circle
                cx="25"
                cy="25"
                r="22.7"
                style={{ fill: "#e2e8ea", stroke: "#000", strokeWidth: 1.26667 + "px" }}
                data-name="mask0 964 9932"
              />
            </mask>
          </defs>
          <path d="M50 25A25 25 0 1 1 25 0a24.9 24.9 0 0 1 25 25Z" style={{ fill: "#e3e8ea" }} />
          <g style={{ mask: "url(#a)" }}>
            <path
              d="M34.68 21.3a9.64 9.64 0 1 1-9.63-9.63 9.64 9.64 0 0 1 9.63 9.63Zm7.76 21.61a25 25 0 0 1-34.83.05 20.38 20.38 0 0 1 2.1-2.46 21.7 21.7 0 0 1 30.67 0 21.33 21.33 0 0 1 2.06 2.41Z"
              style={{ fill: "#fff" }}
            />
          </g>
        </svg>
      )}
    </>
  );
};

export default UserIcon;
