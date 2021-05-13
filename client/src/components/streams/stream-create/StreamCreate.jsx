import { useRef, useState } from "react";
import { connect } from "react-redux";
import { changeInput } from "../../../actions";

import InputText from "../../common/input/InputText";
import FilledRoundButton from "../../common/button/FilledRoundButton";
import styles from "./stream-create.module.scss";

const StreamCreate = ({ changeInput, form }) => {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  const { title, description } = form;

  const handleInputChange = (e) => {
    changeInput(e.target.name, e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    titleRef.current.value = "";
    descriptionRef.current.value = "";
  };

  return (
    <form className={styles.form}>
      <h2>스트림 생성하기</h2>
      <label htmlFor="title">스트림 제목</label>
      <InputText
        ref={titleRef}
        placeholder="제목을 입력하세요"
        name="title"
        value={title}
        onChange={handleInputChange}
      />
      <label htmlFor="description">스트림 설명</label>
      <InputText
        ref={descriptionRef}
        placeholder="내용을 입력하세요"
        name="description"
        value={description}
        onChange={handleInputChange}
      />
      <FilledRoundButton onClick={handleOnSubmit} width="100%">
        생성하기
      </FilledRoundButton>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    form: state.form,
  };
};

export default connect(mapStateToProps, { changeInput })(StreamCreate);
