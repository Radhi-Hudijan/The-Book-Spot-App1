import React, { useEffect, useState } from "react";
import styles from "./FreeBooksList.module.css";
import BookCard from "../BookCard/BookCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css/skyblue";
import Loading from "../Loading/Loading";

const FreeBooksList = () => {
  const [freeBooks, setFreeBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        // check local storage before fetch
        const check = localStorage.getItem("freeBooks");
        if (check) {
          setFreeBooks(JSON.parse(check));
        } else {
          const response = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=javacript&filter=ebooks&maxResults=15&orderBy=newest&key=AIzaSyB0cCh0SmCTYBVDqY0wLPulH-SUOdaNRB0`
          );
          const data = await response.json();
          localStorage.setItem("freeBooks", JSON.stringify(data.items));
          setFreeBooks(data.items);
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
      <h2 className={styles.title}>Free Books</h2>
      {loading && <Loading />}

      <div className={styles.list}>
        <Splide
          options={{
            perPage: 4,
            pagination: false,
            drag: "free",
            gap: "5rem",
            autoWidth: true,
          }}
        >
          {freeBooks.map((book) => {
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

export default FreeBooksList;
