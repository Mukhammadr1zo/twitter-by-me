import "./LoadingIcon.scss";

const LoadingIcon = () => {
  return (
    <div className="loading">
      <svg className="loading-icon" height="26" viewBox="0 0 32 32" width="26">
        <circle id="circle-1" cx="16" cy="16" fill="none" r="14" strokeWidth={3} />
        <circle id="circle-2" cx="16" cy="16" fill="none" r="14" strokeWidth={3} />
      </svg>
    </div>
  );
};

export default LoadingIcon;
