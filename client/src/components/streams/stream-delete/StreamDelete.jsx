import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getOneStream, deleteStream } from "../../../actions";
import Modal from "../../layout/modal/Modal";
import styles from "./stream-delete.module.scss";
import LineButton from "../../common/button/LineButton";
import Stream from "../stream/Stream";
const StreamDelete = (props) => {
  const { id } = props.match.params;

  useEffect(() => {
    props.getOneStream(id);
  }, []);

  const handleCloseModal = () => {
    props.history.push("/");
  };

  const handleDeleteStream = () => {
    props.deleteStream(id);
    props.history.push("/");
  };

  return (
    <>
      <Modal onClick={handleCloseModal}>
        <div className={styles.container}>
          <div className={styles.header}>스트림 삭제하기</div>
          <div className={styles.content}>
            선택하신 스트림을 삭제하시겠습니까?
            <div className={styles.metadata}>
              {props.stream && <Stream {...props.stream} />}
            </div>
          </div>
          <div className={styles.actions}>
            <LineButton onClick={handleDeleteStream}>삭제하기</LineButton>
            <LineButton onClick={handleCloseModal}>취소하기</LineButton>
          </div>
        </div>
      </Modal>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};
export default connect(mapStateToProps, { getOneStream, deleteStream })(
  StreamDelete
);
