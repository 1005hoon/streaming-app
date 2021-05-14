import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllStreams } from "../../../actions";
import Stream from "../stream/Stream";
import styles from "./stream-list.module.scss";

const StreamList = (props) => {
  useEffect(() => {
    props.getAllStreams();
  }, []);

  const renderStreams = () => {
    return props.streams.map((stream) => (
      <Stream key={stream.id} {...stream} currentUserId={props.currentUserId} />
    ));
  };

  return (
    <main>
      <h2 className={styles.title}>라이브 스트리밍 보기</h2>
      <section className={styles.streams}>{renderStreams()}</section>
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth?.user?.id,
  };
};
export default connect(mapStateToProps, { getAllStreams })(StreamList);
