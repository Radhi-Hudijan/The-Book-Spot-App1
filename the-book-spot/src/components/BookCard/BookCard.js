import React from "react";
import styles from "./BookCard.module.css";
const BookCard = (book) => {
  let bookDetails = book.book.volumeInfo;

  return (
    <div className={`${styles.book} ${styles.read}`}>
      <div className={styles.cover}>
        <img src={bookDetails.imageLinks.thumbnail} alt={bookDetails.title} />{" "}
      </div>
      <div className={styles.description}>
        <p className={styles.title}>{bookDetails.title}</p>
        <span className={styles.author}>{bookDetails.authors[0]}</span>
      </div>
    </div>
  );
};

export default BookCard;
