import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const HomeStyledIcon = styled(FontAwesomeIcon)`
  color: ${(props) => props.theme.text.highlighted};
  font-size: 50px;
  margin-top: 55px;
  &:hover {
    cursor: pointer;
    transition: ease-in-out 0.4s;
    transform: scale(2, 2);
  }
`;

export default HomeStyledIcon;
