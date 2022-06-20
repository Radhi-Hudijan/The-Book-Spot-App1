import React from "react";
import styles from "./BookCard.module.css";
import { Link } from "react-router-dom";
const BookCard = ({ book }) => {
  let bookDetails = book.volumeInfo;

  let route = book.id;
  return (
    <Link to={`/bookDetails/${route}`}>
      <div className={`${styles.book} ${styles.read}`}>
        <div className={styles.cover}>
          <img
            src={bookDetails.imageLinks?.thumbnail}
            alt={bookDetails.title}
          />
        </div>
        <div className={styles.description}>
          <p className={styles.title}>{bookDetails.title}</p>
          <span className={styles.author}>{bookDetails.authors}</span>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
