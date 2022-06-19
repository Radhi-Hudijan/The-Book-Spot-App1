import React from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import useFetch from "../../Hooks/useFetch";
import BookCard from "../../components/BookCard/BookCard";
import styles from "./QuickLinksPage.module.css";
import SearchIcons from "../../components/SearchIcons/SearchIcons";

const QuickLinksPage = () => {
  const { searchWord } = useParams();

  const { data: BooksResult, loading, error } = useFetch(searchWord);

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
        {BooksResult.map((book) => (
          <BookCard book={book} key={book.id} />
        ))}
      </div>
    </>
  );
};

export default QuickLinksPage;
