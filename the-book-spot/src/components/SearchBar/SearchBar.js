import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import { MdClear, MdSearch } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const SearchBar = () => {
  const navigate = useNavigate();
  const [searchVal, setSearchVal] = useState("");

  const handleInput = (e) => {
    setSearchVal(e.target.value);
  };

  const handleClearBtn = () => {
    setSearchVal("");
  };

  const submitHandler = (e) => {
    e.preventDefault();

    navigate("/search/" + searchVal);
  };
  const clearBtnClass = searchVal ? styles.clearIcon : "";
  return (
    <>
      <h3 className={styles.title}>
        Search the world's most comprehensive index of full-text books.
      </h3>
      <form onSubmit={submitHandler}>
        <div className={styles.container}>
          <div className={styles.inputWrap}>
            <MdSearch className={styles.searchIcon} onClick={submitHandler} />

            <input
              onChange={handleInput}
              value={searchVal}
              type="text"
              name="product-search"
              className={styles.productSearch}
              placeholder="Search Your Favorite Books"
            />
            <MdClear onClick={handleClearBtn} className={clearBtnClass} />
          </div>
        </div>
      </form>
    </>
  );
};

export default SearchBar;
