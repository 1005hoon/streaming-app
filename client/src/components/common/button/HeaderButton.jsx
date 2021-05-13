import React from "react";
import styled from "styled-components/macro";

const Btn = styled.button`
  position: relative;
  background-color: transparent;
  border: 1px solid #${(props) => props.color};
  border-radius: 40px;
  padding: 0 0.8rem;
  height: 3rem;
  font-size: 1.2rem;
  width: ${(props) => props.width};
  transition: all 0.2s ease;

  :disabled {
    border-color: #b5bfc4;
    cursor: not-allowed;

    span {
      color: #b5bfc4;
    }
  }

  &:hover:not(:disabled) {
    background-color: #fff;
    span {
      color: #1b1b1b;
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
  color: #${(props) => props.color};
  letter-spacing: -0.48px;
  transition: all 0.15s ease;
`;

const HeaderButton = (props) => {
  return (
    <Btn
      className={props.className}
      onClick={(e) => props.onClick(e)}
      width={props.width}
      type={props.type}
      disabled={props.disabled}
      color={props.color}
    >
      <ButtonText>{props.children}</ButtonText>
    </Btn>
  );
};

HeaderButton.defaultProps = {
  children: "버튼 텍스트를 입력해주세요",
  width: "auto",
  color: "fff",
  type: "button",
  onClick: () => {},
  disabled: false,
};

export default HeaderButton;
