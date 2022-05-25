import React, { FC, ReactNode } from "react";
import styled from "styled-components";

const BackdropDiv = styled.div`
  background-color: rgba(0, 0, 0, 0.75);
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface PropsInterface {
  children?: ReactNode;
  closeModalHandler: () => any;
}

const Backdrop = (props: PropsInterface) => {
  return (
    <BackdropDiv onClick={props.closeModalHandler}>
      {props.children}
    </BackdropDiv>
  );
};

export default Backdrop;
