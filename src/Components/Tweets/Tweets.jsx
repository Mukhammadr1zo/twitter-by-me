import React from "react";

import Tweet from "../Tweet/Tweet";
import LoadingIcon from "../Lib/Loading/LoadingIcon";

import "./Tweets.scss";

const Tweets = () => {
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      const res = await fetch("https://reqres.in/api/users?page=1");

      const data = await res.json();

      if (data?.data) {
        setUsers([...data?.data]);
        setLoading(false);
      }
    })();
  }, []);

  return (
    <section className="tweets">
      <ul className="tweets__list">
        {users?.length > 0 && users.map((user) => <Tweet key={user.id} user={user} />)}
      </ul>

      {loading && <LoadingIcon />}
    </section>
  );
};

export default Tweets;
