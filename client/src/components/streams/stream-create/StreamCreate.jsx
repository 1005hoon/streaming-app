import { useState,useRef } from 'react'

import InputText from "../../common/input/InputText";
import styles from "./stream-create.module.scss";

const StreamCreate = (props) => {
  const titleRef = useRef(null)
  const descriptionRef = useRef(null)

  const [title, setTitle] = useState()
  const [description, setDescription] = useState()

const handleInputChange = e => {}
  return (
    <form>
      <InputText ref={titleRef} placeholder="스트림 제목을 입력하세요" value={title} onChange={handleInputChange}/>
      <InputText ref={descriptionRef}/>
    </form>
  );
};


  // placeholder: "",
  // width: "100%",
  // error: false,
  // disabled: false,
  // defaultValue: null,
  // value: "",
  // onChange: () => {},
  // id: null,
  // required: false,
  // onKeyPress: () => {},
export default StreamCreate