import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";

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

const LinkBtn = styled(Link)`
  display: inline-block;
  position: relative;
  background-color: transparent;
  border: 1px solid #1660d0;
  padding: 0.55rem 0.8rem;
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
    text-decoration: none;
    span {
      color: #fff;
    }
  }

  :active {
    top: 1px;
    left: 1px;
  }

  + a {
    margin-left: 5px;
  }
`;

const LineBtn = (props) => {
  if (props?.to) {
    return (
      <LinkBtn to={props.to}>
        <ButtonText>{props.children}</ButtonText>
      </LinkBtn>
    );
  }

  return (
    <Btn
      type={props.type}
      disabled={props.disabled}
      onClick={(e) => props.onClick(e)}
    >
      <ButtonText>{props.children}</ButtonText>
    </Btn>
  );
};

LineBtn.defaultProps = {
  children: "버튼 텍스트를 입력해주세요",
  width: "auto",
  type: "button",
  onClick: () => {},
  disabled: false,
};

export default LineBtn;
