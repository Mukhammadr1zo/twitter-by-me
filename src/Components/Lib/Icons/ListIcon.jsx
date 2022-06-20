const ListIcon = () => {
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
          d="M3.4 3.82c0-.73.6-1.32 1.33-1.32h14.54c.73 0 1.32.59 1.32 1.32v16.36c0 .73-.59 1.32-1.32 1.32H4.73c-.73 0-1.32-.59-1.32-1.32V3.82ZM6.55 6.55h10.9m-10.9 4.54h10.9m-10.9 4.55h4.54"
          stroke="currentColor"
          strokeLinecap="round"
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.73 2c-1 0-1.82.81-1.82 1.82v16.36c0 1 .81 1.82 1.82 1.82h14.54c1 0 1.82-.81 1.82-1.82V3.82c0-1-.81-1.82-1.82-1.82H4.73Zm1.82 4.1a.45.45 0 0 0 0 .9h10.9a.45.45 0 1 0 0-.9H6.55Zm0 4.54a.45.45 0 1 0 0 .9h10.9a.45.45 0 0 0 0-.9H6.55Zm0 4.54a.45.45 0 0 0 0 .91h4.54a.45.45 0 0 0 0-.9H6.55Z"
          fill="currentColor"
        />
      </svg>
    </>
  );
};

export default ListIcon;
