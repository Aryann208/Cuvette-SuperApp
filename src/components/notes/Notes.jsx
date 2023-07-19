import React, { useEffect, useState } from 'react';
import classes from './Notes.module.css';

const Notes = () => {
  const [notesData, setNotesData] = useState('');

  const onChangeHandler = (e) => {
    setNotesData(e.target.value);
  };

  useEffect(() => {
    const storedNotesData = localStorage.getItem('notesData');
    if (storedNotesData) {
      setNotesData(storedNotesData);
    }
  }, []);

  useEffect(() => {
    let timer;
    const storeNotesData = () => {
      localStorage.setItem('notesData', notesData);
    };

    clearTimeout(timer);
    timer = setTimeout(storeNotesData, 1000);
    return () => clearTimeout(timer);
  }, [notesData]);

  return (
    <div className={classes.Notes}>
      <h2>All notes</h2>
      <textarea
        rows="15"
        cols="30"
        type="text"
        value={notesData}
        onChange={onChangeHandler}
      ></textarea>
    </div>
  );
};

export default Notes;
