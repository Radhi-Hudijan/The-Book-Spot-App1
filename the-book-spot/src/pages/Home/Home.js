import React from "react";

import PopularBooks from "../../components/PopularBooks/PopularBooksList";
import FreeBooksList from "../../components/FreeBooksList/FreeBooksList";
import SearchIcons from "../../components/SearchIcons/SearchIcons";
import SearchBar from "../../components/SearchBar/SearchBar";

const Home = () => {
  return (
    <>
      <SearchBar />
      <SearchIcons />
      <PopularBooks />
      <FreeBooksList />
    </>
  );
};

export default Home;
