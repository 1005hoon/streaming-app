import React from "react";
import styled from "styled-components/macro";

const Btn = styled.button`
  position: relative;
  border: none;
  padding: 0 3rem 0 2rem;
  background-color: #05bae9;
  border-radius: 30px;
  height: 4rem;
  display: flex;
  align-items: center;
  width: ${({ width }) => width};
  justify-content: center;
  transition: all 0.15s ease;

  :disabled {
    border-color: #b5bfc4;
    cursor: not-allowed;

    span {
      color: #b5bfc4;
    }
  }

  &:hover:not(:disabled) {
    background-color: #01a0c8;
    span {
      color: #fff;
    }
  }

  :active {
    top: 1px;
    left: 1px;
  }

  + button {
    margin-left: 5px;
  }
`;

const Text = styled.span`
  color: #fff;
  font-size: 14px;
  font-weight: 900;
`;

function FilledRoundButton(props) {
  return (
    <Btn type="button" onClick={(e) => props.onClick(e)} width={props.width}>
      <Text>{props.children}</Text>
    </Btn>
  );
}

FilledRoundButton.defaultProps = {
  children: "내용이 비어있습니다",
  width: "auto",
  onClick: () => {},
};

export default FilledRoundButton;
