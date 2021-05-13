import React from "react";
import styles from "./body.module.scss";

const Body = (props) => {
  return <div className={styles.body}>{props.children}</div>;
};

export default Body;
