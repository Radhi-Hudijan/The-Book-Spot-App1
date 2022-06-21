import React from "react";

import PopularBooks from "../../components/PopularBooks/PopularBooksList";
import FreeBooksList from "../../components/FreeBooksList/FreeBooksList";
import SearchIcons from "../../components/SearchIcons/SearchIcons";
import SearchBar from "../../components/SearchBar/SearchBar";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SearchBar />
      <SearchIcons />
      <PopularBooks />
      <FreeBooksList />
    </motion.div>
  );
};

export default Home;
