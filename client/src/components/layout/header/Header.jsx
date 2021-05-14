import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "../../googleOAuth/GoogleAuth";
import styles from "./header.module.scss";
import { connect } from "react-redux";

const Header = (props) => {
  console.log(props);
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
              스트리밍 보기
            </Link>
            {props.isSignedIn && (
              <Link className={styles["link-item"]} to="/streams/create">
                스트리밍 시작하기
              </Link>
            )}
            <GoogleAuth className={styles["link-item"]} />
          </ul>
        </nav>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};
export default connect(mapStateToProps, null)(Header);
