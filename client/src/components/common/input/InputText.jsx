import React, { forwardRef } from "react";
import styled from "styled-components/macro";

const Input = styled.input`
  background: #fff;
  height: 4rem;
  border: 1px solid #b5bfc4;
  padding: 0 10px;
  width: ${(props) => props.width};
  font-size: 1.4rem;
  color: #222;
  letter-spacing: -0.52px;
  border-color: ${(props) => (props.error ? "#ffabab" : "#b5fc4")};
  margin-bottom: 1rem;

  &:focus {
    border-color: ${(props) => (props.error ? "#ffabab" : "#05bae9")};
  }

  &:disabled {
    background: #f3f3f3;
    cursor: not-allowed;

    &::placeholder {
      opacity: 0.3;
    }
  }

  &::placeholder {
    font-size: 13px;
    opacity: 0.3;
    color: #222;
    letter-spacing: -0.52px;
  }
`;

const InputText = forwardRef((props, ref) => {
  return (
    <Input
      onKeyPress={props.onKeyPress}
      required={props.required}
      type="text"
      id={props.id}
      ref={ref}
      name={props.name}
      value={props.value || ""}
      onChange={(e) => props.onChange(e)}
      width={props.width}
      disabled={props.disabled}
      error={props.error}
      placeholder={props.placeholder}
    />
  );
});

InputText.defaultProps = {
  placeholder: "",
  width: "100%",
  name: "",
  error: false,
  disabled: false,
  defaultValue: null,
  value: "",
  onChange: () => {},
  id: null,
  required: false,
  onKeyPress: () => {},
};
export default InputText;
