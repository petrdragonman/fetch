import { useState } from "react";

const UserContainer = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const url = "https://randomuser.me/api/";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json)
      .then((data) => setUserData(data.results[0]))
      .catch((e) => setError(e));
  }, []);
};

export default UserContainer;
