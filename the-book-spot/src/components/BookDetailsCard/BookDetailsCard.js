import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./BookDetailsCard.module.css";
import { MdLanguage, MdContactPage, MdBook } from "react-icons/md";
import { BiArrowBack } from "react-icons/bi";
import { FavoriteIDContext } from "../../contexts/favoriteIDsContext";
import { ReactComponent as RegularHeart } from "../../assets/heart-regular.svg";
import { ReactComponent as SolidHeart } from "../../assets/heart-solid.svg";

const BookDetailsCard = ({
  id,
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
  const { favoriteIDs, getFavoritesID } = useContext(FavoriteIDContext);

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
            {favoriteIDs.includes(id) ? (
              <div
                className={styles.solidHeart}
                onClick={() => {
                  getFavoritesID(id);
                }}
              >
                <SolidHeart /> <p>Favourited</p>
              </div>
            ) : (
              <div
                className={styles.heart}
                onClick={() => {
                  getFavoritesID(id);
                }}
              >
                <RegularHeart /> <p>Add To Favorite</p>
              </div>
            )}
          </div>
        </div>

        <div className={styles.contentCard}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.writtenBy}> By : {author}</p>
          <hr />

          <p className={styles.bookPublishedDate}>
            Published Date : {publishedDate}
          </p>

          <p className={styles.description}>{description}</p>
          <div className={styles.buttonRow}>
            <button
              className={`${styles.btn}`}
              onClick={() => window.open(`${previewLink}`, "_blank")}
            >
              Review In Google
            </button>

            <button
              className={`${styles.btn}`}
              onClick={() => window.open(`${infoLink}`, "_blank")}
            >
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
              {printType}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookDetailsCard;
