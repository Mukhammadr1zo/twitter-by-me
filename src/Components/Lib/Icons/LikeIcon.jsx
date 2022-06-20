const LikeIcon = ({ isliked = false }) => {
  return (
    <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.63 6.29c0 3.05-3.43 5.5-5.33 6.62a2.4 2.4 0 0 1-2.47 0C4.93 11.8 1.5 9.34 1.5 6.3c0-3.23 2.61-6.57 6.57-2.2 3.95-4.37 6.56-1.03 6.56 2.2Z"
        stroke="currentColor"
        strokeWidth=".8"
      />
      <path
        d="M14.63 6.29c0 3.05-3.43 5.5-5.33 6.62a2.4 2.4 0 0 1-2.47 0C4.93 11.8 1.5 9.34 1.5 6.3c0-3.23 2.61-6.57 6.57-2.2 3.95-4.37 6.56-1.03 6.56 2.2Z"
        fill={isliked ? "currentColor" : "none"}
      />
    </svg>
  );
};

export default LikeIcon;
