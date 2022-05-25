import styled from "styled-components";

const ListsTile = styled.div`
  background-color: white;
  color: red;
  width: 150px;
  height: 200px;
  border: 1px solid red;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  &:hover {
    cursor: pointer;
  }
`;

export default ListsTile;
