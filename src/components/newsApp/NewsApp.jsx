import React, { useEffect, useState } from 'react';
import classes from './NewsApp.module.css';

const NewsApp = () => {
  const [article, setArticle] = useState(null);

  const NEWSAPIKEY = process.env.REACT_APP_NEWSAPIKEY;

  useEffect(() => {
    const fetchData1 = async () => {
      const url1 = `https://newsapi.org/v2/everything?q=keyword&apiKey=${NEWSAPIKEY}`;

      try {
        const response = await fetch(url1);
        if (response.ok) {
          const data = await response.json();
          const articleNum = Math.floor(Math.random() * data.articles.length);
          setArticle(data.articles[articleNum]);
        } else {
          console.error('Request Denied');
        }
      } catch (error) {
        console.error('Error: ' + error);
      }
    };
    fetchData1();
  }, [NEWSAPIKEY]);
  return (
    <div className={classes.newsContainer}>
      <img src={article?.urlToImage} alt="" />
      <div className={classes.newsMetadata}>
        <h4>{article?.title} </h4> <h6>{article?.publishedAt}</h6>
      </div>
      <p>{article?.description} </p>
    </div>
  );
};

export default NewsApp;
