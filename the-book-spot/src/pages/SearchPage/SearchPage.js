import React from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import useFetch from "../../Hooks/useFetch";
import BookCard from "../../components/BookCard/BookCard";
import styles from "./SearchPage.module.css";
import SearchIcons from "../../components/SearchIcons/SearchIcons";

const SearchPage = () => {
  const { searchWord } = useParams();
  let url = `https://www.googleapis.com/books/v1/volumes?q=${searchWord}&orderBy=newest`;
  const { data: BooksResult, loading, error } = useFetch(url);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>There is an error as following:{error}</div>;
  }

  return (
    <>
      <SearchIcons />
      <div className={styles.list}>
        {BooksResult.map((book) => {
          return <BookCard book={book} key={book.etag} />;
        })}
      </div>
    </>
  );
};

export default SearchPage;
