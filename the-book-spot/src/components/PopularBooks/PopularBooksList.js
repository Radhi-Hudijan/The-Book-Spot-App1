import React from "react";
import styles from "./PopularBooksList.module.css";
import BookCard from "../BookCard/BookCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css/skyblue";
import Loading from "../Loading/Loading";
import useFetch from "../../Hooks/useFetch";

const PopularBooksList = () => {
  let url =
    "https://www.googleapis.com/books/v1/volumes?q=business&orderBy=newest";
  const { data: popularBooks, loading, error } = useFetch(url);

  if (error) {
    return <div>There is an error as following:{error}</div>;
  }

  return (
    <>
      <h2 className={styles.title}>Popular Books For You</h2>
      {loading && <Loading />}

      <div className={styles.list}>
        <Splide
          options={{
            perPage: 5,
            pagination: false,
            drag: "free",
            gap: "5rem",
            autoWidth: true,
          }}
        >
          {popularBooks.map((book) => {
            return (
              <SplideSlide key={book.etag}>
                <BookCard book={book} />
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </>
  );
};

export default PopularBooksList;
