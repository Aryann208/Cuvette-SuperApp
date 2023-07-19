import { useState, useEffect } from 'react';
import classes from './Dashboard.module.css';
import Avatar from '../../assets/image 14.png';
const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [userCategories, setUserCategories] = useState(null);

  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) setUserData(JSON.parse(storedUserData));

    const storedCategories = localStorage.getItem('category');
    if (storedCategories) setUserCategories(JSON.parse(storedCategories));
  }, []);
  return (
    <div className={classes.dashboard}>
      <img src={Avatar} alt="" />

      <div className={classes.dashboardInfo}>
        <div className={classes.userMetadata}>
          <p>{userData?.name}</p>
          <p>{userData?.email}</p>
          <h2>{userData?.username}</h2>
        </div>
        <div className={classes.userCategories}>
          {userCategories?.map((category, index) => (
            <p key={index} className={classes.category}>
              {category}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
