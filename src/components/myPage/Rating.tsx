import { useState } from 'react';
import styles from './Rating.module.css';

const RATINGS = [1, 2, 3, 4, 5];

const Star = ({ handleClickStar, selected = false, index, name }: any) => {
  const className = `${styles.rating} ${selected ? styles.selected : ''}`;
  return (
    <button
      value={index}
      className={className}
      onClick={handleClickStar}
      name={name}
    ></button>
  );
};

const Rating = ({ onClick, name }: any) => {
  const [rating, setRating] = useState(0);

  const handleClickStar = (e: any) => {
    const { value, name } = e.target;
    setRating(value);
    onClick(name, value);
  };

  return (
    <div>
      {RATINGS.map((data) => (
        <Star
          key={data}
          index={data}
          handleClickStar={handleClickStar}
          selected={data <= rating ? true : false}
          name={name}
        />
      ))}
    </div>
  );
};

export default Rating;
