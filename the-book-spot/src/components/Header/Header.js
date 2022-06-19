import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  const className = ({ isActive }) => (isActive ? styles.active : styles.link);
  return (
    <div className={styles.nav}>
      <Link to={"/"} className={styles.link}>
        <h2 className={styles.logo}>The Book Spot</h2>
      </Link>
      <ul>
        <NavLink to={"/"} className={className}>
          <li className={styles.items}>HOME</li>
        </NavLink>
        <NavLink to={"/bestSellers"} className={className}>
          <li className={styles.items}>Best Sellers</li>
        </NavLink>
        <NavLink to={"/favoriteBooks"} className={className}>
          <li className={styles.items}>Favorites</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Header;
