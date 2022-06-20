const StatsSmallIcon = () => {
  return (
    <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask
        id="a"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="16"
        height="16"
      >
        <path fill="currentColor" d="M0 0h16v16H0z" />
      </mask>
      <g mask="url(#a)" fill="currentColor">
        <path d="M4 7.33h1.33v7.34H4V7.33ZM7.33 1.33h1.34v13.34H7.33V1.33ZM10.67 5.33H12v9.34h-1.33V5.33Z" />
      </g>
    </svg>
  );
};

export default StatsSmallIcon;
