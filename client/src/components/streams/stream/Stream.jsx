import React from "react";
import styles from "./stream.module.scss";
import kong from "../../../assets/kong.jpeg";

import LineButton from "../../common/button/LineButton";

const Stream = (props) => {
  const renderAvatar = (avatar) => {
    return avatar === "" ? kong : avatar;
  };
  console.log(props);

  const renderEditDeleteButtons = (currentUserId, streamerId) => {
    if (currentUserId === streamerId) {
      return (
        <>
          <LineButton>수정하기</LineButton>
          <LineButton>삭제하기</LineButton>
        </>
      );
    }
  };
  return (
    <div className={styles.stream}>
      <div className={styles["image-wrapper"]}>
        <img src={renderAvatar(props.user.avatar)} alt="사진넣어주세요" />
      </div>
      <div className={styles["text-wrapper"]}>
        <div className={styles.metadata}>
          <h3 className={styles.title}>{props.title}</h3>
          <p className={styles.streamer}>{props.user.name}</p>
          <p className={styles.description}>{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Stream;
