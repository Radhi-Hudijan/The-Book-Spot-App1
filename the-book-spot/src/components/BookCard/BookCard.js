import React, { useContext } from "react";
import styles from "./BookCard.module.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ReactComponent as RegularHeart } from "../../assets/heart-regular.svg";
import { ReactComponent as SolidHeart } from "../../assets/heart-solid.svg";
import { FavoriteIDContext } from "../../contexts/favoriteIDsContext";

const BookCard = ({ book }) => {
  const { favoriteIDs, getFavoritesID } = useContext(FavoriteIDContext);
  let bookDetails = book.volumeInfo;

  let route = book.id;
  const handler = (e) => {
    e.preventDefault();
    getFavoritesID(book.id);
  };
  return (
    <>
      <Link to={`/bookDetails/${route}`}>
        <motion.div
          className={`${styles.book} ${styles.read}`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.1 }}
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
          {favoriteIDs.includes(book.id) ? (
            <div className={styles.solidHeart} onClick={handler}>
              <SolidHeart /> <p>Favourited</p>
            </div>
          ) : (
            <div className={styles.heart} onClick={handler}>
              <RegularHeart /> <p>Add To Favorite</p>
            </div>
          )}
        </motion.div>
      </Link>
    </>
  );
};

export default BookCard;
