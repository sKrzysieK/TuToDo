import React from "react";
import { CirclePicker } from "react-color";
import styled from "styled-components";

const Layout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0px;
`;

interface Props {
  color: string;
  setColor: any;
}

const ModalColorPicker = ({ color, setColor }: Props) => {
  return (
    <Layout>
      <h2>Pick a Color</h2>
      <CirclePicker
        color={color}
        onChange={(updatedColor) => setColor(updatedColor.hex)}
      />
    </Layout>
  );
};

export default ModalColorPicker;
