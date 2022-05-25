//* React
import React, { ReactNode, useState } from "react";
import { CirclePicker } from "react-color";
//* Styled Components
import styled from "styled-components";
//* Helpers
import isDark from "../../helpers/isDark";
//* Components
import Backdrop from "../UI/Backdrop";
import Card from "../UI/Card";
import ModalButton from "./AddListModal/ModalButton";
import ModalColorPicker from "./AddListModal/ModalColorPicker";
import ModalContainer from "./AddListModal/ModalContainer";
import ModalHeader from "./AddListModal/ModalHeader";
import ModalInput from "./AddListModal/ModalInput";

//* Interfaces
interface PropsInterface {
  children?: ReactNode;
  show: boolean;
  closeModalHandler: any;
  addListHandler: any;
}

const AddListModal = (props: PropsInterface) => {
  //* State
  const [listName, setListName] = useState<string>("");
  const [listColor, setListColor] = useState<string>("#ffffff");

  //* Handlers
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setListName(e.target.value);
  const onSaveHandler = () => {
    const list = {
      name: listName,
      color: listColor,
    };
    props.addListHandler(list);
    setListName("");
    setListColor("#ffffff");
    props.closeModalHandler();
  };

  if (!props.show) return null;

  return (
    <ModalContainer>
      <Backdrop closeModalHandler={props.closeModalHandler} />
      <Card style={{ width: "20%", zIndex: 11 }}>
        <ModalHeader style={{ backgroundColor: listColor }}>
          <h2
            style={{
              color: isDark(listColor) ? "#ffffff" : "#000000",
              margin: 0,
              padding: "10px 30px",
            }}
          >
            Name Your List
          </h2>
          <ModalInput
            type="text"
            placeholder="type the name here..."
            value={listName}
            onChange={(e) => onChangeHandler(e)}
          ></ModalInput>
        </ModalHeader>
        <ModalColorPicker>
          <h2>Pick a Color</h2>
          <CirclePicker
            color={listColor}
            onChange={(updatedColor) => setListColor(updatedColor.hex)}
          />
        </ModalColorPicker>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <ModalButton onClick={props.closeModalHandler}>Cancel</ModalButton>
          <ModalButton
            onClick={onSaveHandler}
            disabled={listName && listColor !== "#ffffff" ? false : true}
          >
            Save
          </ModalButton>
        </div>
      </Card>
    </ModalContainer>
  );
};

export default AddListModal;
