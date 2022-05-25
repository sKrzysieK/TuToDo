import React from "react";
import styled from "styled-components";

const LayoutDiv = styled.div`
  background-color: ${(props) => props.theme.bg.primary};
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
`;

const BasicLayout = (props: any) => {
  return <LayoutDiv>{props.children}</LayoutDiv>;
};

export default BasicLayout;
