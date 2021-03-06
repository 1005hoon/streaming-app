import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  position: relative;
  background-color: transparent;
  border: 1px solid #1660d0;
  padding: 0 0.8rem;
  height: 3rem;
  font-size: 1.2rem;
  width: ${(props) => props.width};
  transition: all 0.15s ease;

  :disabled {
    border-color: #b5bfc4;
    cursor: not-allowed;

    span {
      color: #b5bfc4;
    }
  }

  &:hover:not(:disabled) {
    background-color: #1660d0;
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

const ButtonText = styled.span`
  line-height: 0.75;
  color: #1660d0;
  letter-spacing: -0.48px;
  transition: all 0.15s ease;
`;

const RoundButton = ({ onClick, width, className, disabled, children }) => {
  return (
    <Btn
      className={className}
      onClick={(e) => onClick(e)}
      disabled={disabled}
      width={width}
    >
      <ButtonText>{children}</ButtonText>
    </Btn>
  );
};

RoundButton.defaultProps = {
  onClick: () => {},
  width: "auto",
  className: "",
  disabled: false,
  children: "버튼 텍스트를 입력해주세요",
};

export default RoundButton;
