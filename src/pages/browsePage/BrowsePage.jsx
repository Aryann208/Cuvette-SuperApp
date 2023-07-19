import React, { useEffect, useState } from 'react';
import classes from './BrowsePage.module.css';
import Avatar from '../../assets/AvatarLogo.png';
const BrowsePage = () => {
  const [userCategories, setUserCategories] = useState(null);

  useEffect(() => {
    const storedCategories = localStorage.getItem('category');
    if (storedCategories) {
      setUserCategories(storedCategories);
    }
  });
  return (
    <div className={classes.BrowsePage}>
      <div className={classes.BrowseNavigation}>
        <h2>Superapp</h2>
        <img src={Avatar} alt="" />
      </div>
      <h2>Entertainment according to your choice</h2>
      <div></div>
    </div>
  );
};

export default BrowsePage;
