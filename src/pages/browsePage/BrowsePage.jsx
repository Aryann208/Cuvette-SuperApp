import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import classes from './BrowsePage.module.css';
import Avatar from '../../assets/AvatarLogo.png';
const BrowsePage = () => {
  const navigate = useNavigate();
  const [userCategories, setUserCategories] = useState(null);
  const [apiData, setApiData] = useState(null);
  const MOVIESAPIKEY = process.env.REACT_APP_MOVIESAPIKEY;
  useEffect(() => {
    const storedCategories = localStorage.getItem('category');
    if (storedCategories) {
      setUserCategories(JSON.parse(storedCategories));
    }
  }, []);

  const fetchMoviesByCategory = async (categoryName) => {
    const url = `https://api.themoviedb.org/3/search/collection?query=${categoryName}`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${MOVIESAPIKEY}`,
      },
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(
        `Error fetching movies for category "${categoryName}":`,
        error
      );
      return null;
    }
  };

  useEffect(() => {
    console.log(Array.isArray(userCategories));
    const fetchData = async () => {
      if (userCategories && Array.isArray(userCategories)) {
        const moviesByCategories = await Promise.all(
          userCategories.map(async (category) => {
            const movies = await fetchMoviesByCategory(category);
            return { category, movies };
          })
        );

        console.log(moviesByCategories);
        setApiData(moviesByCategories);
      } else {
        console.log(':');
      }
    };
    fetchData();
  }, [userCategories]);

  return (
    <div className={classes.BrowsePage}>
      <div className={classes.BrowseNavigation}>
        <h2 onClick={() => navigate('/home')} className="Logo">
          Superapp
        </h2>
        <img src={Avatar} alt="" />
      </div>
      <h2>Entertainment according to your choice</h2>
      <div>
        {apiData?.map((category, idx) => (
          <>
            <p className={classes.CategoryHeading} key={idx}>
              {category?.category}
            </p>
            <div className={classes.Caraousel}>
              {category?.movies.results.map((movie, idx) => (
                <img
                  key={idx * 1000 + 2}
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt=""
                />
              ))}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default BrowsePage;
