import React from "react";

import PopularBooks from "../../components/PopularBooks/PopularBooksList";
import FreeBooksList from "../../components/FreeBooksList/FreeBooksList";
import SearchIcons from "../../components/SearchIcons/SearchIcons";

const Home = () => {
  return (
    <>
      <SearchIcons />
      <PopularBooks />
      <FreeBooksList />
    </>
  );
};

export default Home;
