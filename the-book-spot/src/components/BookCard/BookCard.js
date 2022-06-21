import React from "react";
import styles from "./BookCard.module.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const BookCard = ({ book }) => {
  let bookDetails = book.volumeInfo;

  let route = book.id;
  return (
    <Link to={`/bookDetails/${route}`}>
      <motion.div
        className={`${styles.book} ${styles.read}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
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
      </motion.div>
    </Link>
  );
};

export default BookCard;
