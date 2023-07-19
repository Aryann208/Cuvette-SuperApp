import React, { useEffect, useState } from 'react';
import classes from './Notes.module.css';
const Notes = () => {
  const [notesData, setNotesData] = useState('');
  const onChangeHandler = (e) => {
    setNotesData(e.target.value);
  };

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
      <input type="text" value={notesData} onChange={onChangeHandler}></input>
    </div>
  );
};

export default Notes;
