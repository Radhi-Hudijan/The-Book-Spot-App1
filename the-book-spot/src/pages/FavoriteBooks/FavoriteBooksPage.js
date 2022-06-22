import React, { useContext, useState, useEffect } from "react";
import { FavoriteIDContext } from "../../contexts/favoriteIDsContext";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import BookCard from "../../components/BookCard/BookCard";
import styles from "..//FavoriteBooks/FavoriteBooksPage.module.css";
import { motion } from "framer-motion";

const FavoriteBooksPage = () => {
  const { favoriteIDs } = useContext(FavoriteIDContext);

  const [favoriteBooks, setFavoriteBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const data = await Promise.all(
          favoriteIDs.map(async (id) => {
            const response = await fetch(
              `https://www.googleapis.com/books/v1/volumes/${id}?key=${process.env.REACT_APP_GOOGLE_API_KEY2}`
            );
            const result = await response.json();
            return result;
          })
        );

        setFavoriteBooks(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [favoriteIDs]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>There is an error as following:{error}</div>;
  }

  if (favoriteIDs.length === 0) {
    return (
      <h1 className={styles.favTitle}>
        You haven't chosen any favourites yet!
      </h1>
    );
  }

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className={styles.favTitle}>Your Favorite Books</h1>
      <div className={styles.favoriteList}>
        {favoriteBooks.map((book) => {
          let route = `/bookDetails/${book.id}`;

          return (
            <Link to={route} key={book.etag}>
              <BookCard book={book} />
            </Link>
          );
        })}
      </div>
    </motion.div>
  );
};

export default FavoriteBooksPage;
