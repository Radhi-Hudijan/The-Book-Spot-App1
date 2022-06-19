import React, { useEffect, useState } from "react";
import styles from "./PopularBooksList.module.css";
import BookCard from "../BookCard/BookCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css/skyblue";
import Loading from "../Loading/Loading";

const PopularBooksList = () => {
  const [popularBooks, setPopularBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        //check local storage before fetch
        const check = localStorage.getItem("popularBooks");
        if (check) {
          setPopularBooks(JSON.parse(check));
        } else {
          const response = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=flowers&orderBy=newest&key=AIzaSyB0cCh0SmCTYBVDqY0wLPulH-SUOdaNRB0&maxResults=15`
          );
          const data = await response.json();
          localStorage.setItem("popularBooks", JSON.stringify(data.items));
          setPopularBooks(data.items);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

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
              <SplideSlide key={book.id}>
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
