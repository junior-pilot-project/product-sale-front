import React, { useState } from 'react';
import styles from './Rating.module.css';

const RATINGS = [1, 2, 3, 4, 5];

const Star = ({ handleClickStar, selected = false, index }: any) => {
  const className = `${styles.rating} ${selected ? styles.selected : ''}`;
  return (
    <button
      value={index}
      className={className}
      onClick={handleClickStar}
    ></button>
  );
};

const Rating = () => {
  const [rating, setRating] = useState(0);

  const handleClickStar = (e: any) => {
    setRating(e.target.value);
  };

  return (
    <div>
      {RATINGS.map((data) => (
        <Star
          index={data}
          handleClickStar={handleClickStar}
          selected={data <= rating ? true : false}
        />
      ))}
    </div>
  );
};

export default Rating;
