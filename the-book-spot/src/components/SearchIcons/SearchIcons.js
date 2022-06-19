import React from "react";
import styles from "./SearchIcons.module.css";
import { FaCodepen, FaHtml5, FaCss3 } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { NavLink } from "react-router-dom";

const SearchIcons = () => {
  const className = ({ isActive }) =>
    isActive ? `${styles.active} ${styles.icon}` : styles.icon;
  return (
    <>
      <p>Quick search links</p>
      <ul className={styles.iconList}>
        <li className={styles.color}>
          <NavLink to={"/quickSearch/codepen"} className={className}>
            <FaCodepen />
          </NavLink>
          <div className={styles.title}>Codepen</div>
        </li>
        <li className={styles.color}>
          <NavLink to={"/quickSearch/html"} className={className}>
            <FaHtml5 />
          </NavLink>
          <div className={styles.title}>HTML 5</div>
        </li>
        <li className={styles.color}>
          <NavLink to={"/quickSearch/css"} className={className}>
            <FaCss3 />
          </NavLink>
          <div className={styles.title}>CSS 3</div>
        </li>
        <li className={styles.color}>
          <NavLink to={"/quickSearch/javascript"} className={className}>
            <SiJavascript />
          </NavLink>
          <div className={styles.title}>Javascript</div>
        </li>
      </ul>
    </>
  );
};

export default SearchIcons;
