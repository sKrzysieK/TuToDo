import styled from "styled-components";
import React, { FC } from "react";
import { List } from "@prisma/client";
import ListsTile from "./ListsTile";
import isDark from "../../../helpers/isDark";

const ListsDiv = styled.div`
  background-color: ${(props) => props.theme.bg.secondary};
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

interface Props {
  lists: List[];
}

const ListsBox = ({ lists }: Props) => {
  return (
    <ListsDiv>
      {lists.map((list) => (
        <ListsTile
          key={list.id}
          style={{
            backgroundColor: list.color,
            color: isDark(list.color) ? "#ffffff" : "#000000",
          }}
        >
          <p>{list.name}</p>
        </ListsTile>
      ))}
    </ListsDiv>
  );
};

export default ListsBox;
