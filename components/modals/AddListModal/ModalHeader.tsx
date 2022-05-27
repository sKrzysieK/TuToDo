import React from "react";
import styled from "styled-components";
import ModalInput from ".././AddListModal/ModalInput";
//* Helpers
import isDark from "../../../helpers/isDark";

const Layout = styled.div`
  width: 100%;
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

interface Props {
  color: string;
  name: string;
  onNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ModalHeader = ({ color, name, onNameChange }: Props) => {
  return (
    <Layout style={{ backgroundColor: color }}>
      <h2
        style={{
          color: isDark(color) ? "#ffffff" : "#000000",
          margin: 0,
          padding: "10px 30px",
        }}
      >
        Name Your List
      </h2>
      <ModalInput
        type="text"
        placeholder="type the name here..."
        value={name}
        onChange={(e) => onNameChange(e)}
        autoFocus
      ></ModalInput>
    </Layout>
  );
};

export default ModalHeader;
