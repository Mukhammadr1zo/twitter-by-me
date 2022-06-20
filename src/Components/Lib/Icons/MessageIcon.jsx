const MessageIcon = () => {
  return (
    <>
      <svg
        className="icon icon--outline"
        width="24"
        height="24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 5.76v13.41c0 1.19.96 2.15 2.15 2.15h17.17c1.19 0 2.15-.96 2.15-2.15v-8.65l.07-4.76M1 5.76V4.15C1 2.96 1.96 2 3.15 2H19.4a3.14 3.14 0 0 1 3.14 3.18l-.01.58M1 5.76l8.52 5.11a4.3 4.3 0 0 0 4.42 0l8.6-5.11"
          stroke="currentColor"
        />
      </svg>

      <svg
        className="icon icon--fill"
        width="24"
        height="24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.15 21.32h17.17c1.19 0 2.15-.96 2.15-2.15v-8.65l.06-4.18-8.33 4.96a4.8 4.8 0 0 1-4.93 0L1 6.34v12.83c0 1.19.96 2.15 2.15 2.15ZM1 5.26V4.15C1 2.96 1.96 2 3.15 2H19.4a3.14 3.14 0 0 1 3.14 3.18v.08a.5.5 0 0 0-.27.07l-8.6 5.11a3.8 3.8 0 0 1-3.9 0L1.26 5.33A.5.5 0 0 0 1 5.26Z"
          fill="currentColor"
        />
      </svg>
    </>
  );
};

export default MessageIcon;
