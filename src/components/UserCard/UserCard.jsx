import { useEffect, useState } from 'react';

const UserCard = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch('https://randomuser.me/api/')
      .then((response) => response.json())
      .then((data) => setUserData(data.results[0]))
      .catch((error) => setError(error));
  }, []);

  return (
    <div>
      {userData && (
        <article>
            <h3>
                {userData.name.title} {userData.name.first} {userData.name.last}
            </h3>
            <img src={userData.picture.medium} alt="picture of an user" />
            <p>{userData.location.city} {userData.location.state} {userData.location.country}</p>
        </article>
      )}
      {error && <h3 style={{ color: 'red' }}>Failed to fetch data</h3>}
      {!userData && !error && <h3>Loading</h3>}
    </div>
  );
};
export default UserCard;