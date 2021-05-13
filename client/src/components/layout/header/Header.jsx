import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "../../googleOAuth/GoogleAuth";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.layout}>
        <div className={styles.logo}>
          <Link className={styles["nav-link"]} to="/">
            Hoonnote
          </Link>
          <span className={styles.bar} />
          <span>스트리밍</span>
        </div>
        <nav>
          <ul className={styles["nav-links"]}>
            <Link className={styles["link-item"]} to="/streams/show">
              All Streams
            </Link>
            <GoogleAuth className={styles["link-item"]} />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
