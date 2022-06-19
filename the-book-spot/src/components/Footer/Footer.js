import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaLinkedinIn,
  FaTwitter,
  FaInstagramSquare,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.footerCol}>
            <h4>company</h4>
            <ul>
              <li>
                <Link to={"/"}>about us</Link>
              </li>
              <li>
                <Link to={"/"}>our services</Link>
              </li>
              <li>
                <Link to={"/"}>privacy policy</Link>
              </li>
              <li>
                <Link to={"/"}>affiliate program</Link>
              </li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4>get help</h4>
            <ul>
              <li>
                <Link to={"/"}>FAQ</Link>
              </li>
              <li>
                <Link to={"/"}>shipping</Link>
              </li>
              <li>
                <Link to={"/"}>returns</Link>
              </li>
              <li>
                <Link to={"/"}>order status</Link>
              </li>
              <li>
                <Link to={"/"}>payment options</Link>
              </li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4>online shop</h4>
            <ul>
              <li>
                <Link to={"/"}>watch</Link>
              </li>
              <li>
                <Link to={"/"}>bag</Link>
              </li>
              <li>
                <Link to={"/"}>shoes</Link>
              </li>
              <li>
                <Link to={"/"}>dress</Link>
              </li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4>follow us</h4>
            <div className={styles.socialLinks}>
              <Link to={"/"}>
                <FaFacebook className={styles.facebook} />
              </Link>
              <Link to={"/"} className={styles.twitter}>
                <FaTwitter />
              </Link>
              <Link to={"/"} className={styles.instagram}>
                <FaInstagramSquare />
              </Link>
              <Link to={"/"} className={styles.link}>
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
