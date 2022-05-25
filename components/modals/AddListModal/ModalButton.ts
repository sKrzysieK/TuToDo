import styled from "styled-components";

const ModalButton = styled.button`
  border: none;
  background-color: ${(props) => props.theme.bg.primary};
  color: ${(props) => props.theme.text.highlighted};
  font-weight: bold;
  margin: 10px;
  padding: 10px;
  &:hover {
    background-color: ${(props) => props.theme.bg.secondary};
    color: ${(props) => props.theme.bg.primary};
    cursor: pointer;
  }
  &:disabled {
    cursor: not-allowed;
    &:hover {
      background-color: ${(props) => props.theme.bg.primary};
      color: ${(props) => props.theme.text.highlighted};
    }
  }
`;

export default ModalButton;
