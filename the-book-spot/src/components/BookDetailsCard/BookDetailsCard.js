import React from "react";
import { Link } from "react-router-dom";
import styles from "./BookDetailsCard.module.css";
import { MdLanguage, MdContactPage, MdBook } from "react-icons/md";
import { BiArrowBack } from "react-icons/bi";
const BookDetailsCard = ({
  title,
  author,
  description,
  publishedDate,
  image,
  language,
  pageCount,
  printType,
  previewLink,
  infoLink,
}) => {
  return (
    <>
      <div className={styles.container}>
        {/* <!--   img section   --> */}
        <div className={styles.imgCard}>
          <Link to={"/"}>
            <p className={`${styles.previous} `}>
              <BiArrowBack />
            </p>
          </Link>
          <div className={styles.bookImage}>
            <img src={image} alt={title} />
          </div>
          <div className={styles.bookDetails}>
            <h3 className={styles.bookTitle}>Favorite Icone</h3>
          </div>
        </div>
        {/* <!--   img section   --> */}

        <div className={styles.contentCard}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.writtenBy}> By : {author}</p>
          <hr />

          <p className={styles.bookPublishedDate}>
            Published Date : {publishedDate}
          </p>

          <p className={styles.description}>{description}</p>
          <div className={styles.buttonRow}>
            <button className={`${styles.btn} ${styles.btn3}`}>
              Review Book
            </button>
            <button className={`${styles.btn} ${styles.btn3}`}>
              Read more
            </button>
          </div>
          <hr />
          <div className={styles.icons}>
            <div>
              <MdLanguage className={styles.iconsItem} />
              Language: {language}
            </div>
            <div>
              <MdContactPage className={styles.iconsItem} />
              {pageCount} Pages
            </div>
            <div>
              <MdBook className={styles.iconsItem} />
              Type: {printType}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookDetailsCard;
