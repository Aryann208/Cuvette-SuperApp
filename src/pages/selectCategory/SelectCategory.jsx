import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './SelectCategory.module.css';
import CategoryHolder from '../../components/categoryHolder/CategoryHolder';
import Image1 from '../../assets/image 2.png';
import Image2 from '../../assets/image 3.png';
import Image3 from '../../assets/image 4.png';
import Image4 from '../../assets/image 6.png';
import Image5 from '../../assets/image 7.png';
import Image6 from '../../assets/image 8.png';
import Image7 from '../../assets/image 9.png';
import Image8 from '../../assets/image 10.png';
import Image9 from '../../assets/image 11.png';
import Button from '../../components/button/Button';

const categories = [
  { name: 'Action', image: Image1, color: 'orange' },
  { name: 'Drama', image: Image2, color: 'purple' },
  { name: 'Romance', image: Image3, color: 'green' },
  { name: 'Thriller', image: Image4, color: 'lightblue' },
  { name: 'Western', image: Image5, color: 'red' },
  { name: 'Horror', image: Image6, color: 'blue' },
  { name: 'Fantasy', image: Image7, color: 'pink' },
  { name: 'Music', image: Image8, color: 'red' },
  { name: 'Fiction', image: Image9, color: 'lightgreen' },
];

const SelectCategory = () => {
  const navigate = useNavigate();
  const [selectedIds, setSelectedIds] = useState([]);

  const onClickHandler = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
    } else setSelectedIds([...selectedIds, id]);
  };
  const selectedCategory = (id) => {
    return selectedIds.includes(id);
  };
  const unselectCategory = (id) => {
    setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
  };
  const onSubmitHandler = () => {
    if (selectedIds.length >= 3) {
      const categoryNames = selectedIds.map((id) => categories[id].name);
      localStorage.setItem('categoryIDs', JSON.stringify(selectedIds));
      localStorage.setItem('category', JSON.stringify(categoryNames));
      navigate('/home');
    }
  };
  useEffect(() => {
    const storedIDs = localStorage?.getItem('categoryIDs');
    if (storedIDs) {
      setSelectedIds(JSON.parse(storedIDs));
    }
  }, []);

  return (
    <div className={classes.SelectCategoryPage}>
      <div className={classes.LeftSection}>
        <h2>Super app</h2>
        <h4>Choose your entertainment category</h4>
        <div className={classes.SelectedCategories}>
          {selectedIds?.map((selectedId) => (
            <p key={selectedId} className={classes.SelectedTabs}>
              {categories[selectedId].name}
              <span onClick={() => unselectCategory(selectedId)}>X</span>
            </p>
          ))}
        </div>
        {selectedIds.length >= 3 ? (
          <p></p>
        ) : (
          <p className={classes.Warning}>Minimum 3 category required</p>
        )}
      </div>
      <div className={classes.RightSection}>
        <div className={classes.CategoryHolderContainer}>
          {categories.map((category, id) => (
            <CategoryHolder
              id={id}
              key={id}
              name={category.name}
              image={category.image}
              color={category.color}
              selected={selectedCategory(id)}
              onClick={() => onClickHandler(id)}
            />
          ))}
        </div>
        <Button
          bgColor="#148A08"
          btnText="Next Page"
          textColor="#fff"
          width="8em"
          onClick={onSubmitHandler}
        />
      </div>
    </div>
  );
};

export default SelectCategory;
