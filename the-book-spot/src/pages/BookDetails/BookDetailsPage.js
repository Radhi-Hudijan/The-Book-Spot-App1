import React, { useState, useEffect } from "react";

import Loading from "../../components/Loading/Loading";
import { useParams } from "react-router-dom";
import BookDetailsCard from "../../components/BookDetailsCard/BookDetailsCard";
import { motion } from "framer-motion";

const BookDetailsPage = () => {
  const { id } = useParams();
  let url = `https://www.googleapis.com/books/v1/volumes/${id}?key=${process.env.REACT_APP_GOOGLE_API_KEY2}`;

  const [loading, setLoading] = useState(false);
  const [bookDetails, setBookDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setBookDetails(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>There is an error as following:{error}</div>;
  }
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <BookDetailsCard
        title={bookDetails?.volumeInfo?.title}
        author={bookDetails?.volumeInfo?.authors[0]}
        image={bookDetails?.volumeInfo?.imageLinks?.thumbnail}
        description={bookDetails?.volumeInfo?.description?.replace(
          /<[^>]+>/g,
          ""
        )}
        publishedDate={bookDetails?.volumeInfo?.publishedDate}
        language={bookDetails?.volumeInfo?.language}
        pageCount={bookDetails?.volumeInfo?.pageCount}
        previewLin={bookDetails?.volumeInfo?.previewLink}
        infoLink={bookDetails?.volumeInfo?.infoLink}
        printType={bookDetails?.volumeInfo?.printType}
      />
    </motion.div>
  );
};

export default BookDetailsPage;
