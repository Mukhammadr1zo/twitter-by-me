const BookmarkIcon = () => {
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
          d="M4.5 3c0-.28.22-.5.5-.5h15c.28 0 .5.22.5.5v17.88a.5.5 0 0 1-.82.39l-6.23-5.13a1.5 1.5 0 0 0-1.9 0l-6.23 5.13a.5.5 0 0 1-.82-.39V3Z"
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
          d="M4 3a1 1 0 0 1 1-1h15a1 1 0 0 1 1 1v17.88a1 1 0 0 1-1.64.77l-6.22-5.13a1 1 0 0 0-1.28 0l-6.22 5.13A1 1 0 0 1 4 20.88V3Z"
          fill="currentColor"
        />
      </svg>
    </>
  );
};

export default BookmarkIcon;
