//* React
import React, { ReactNode, useState } from "react";

//* Components
import Backdrop from "../UI/Backdrop";
import Card from "../UI/Card";
import ModalColorPicker from "./AddListModal/ModalColorPicker";
import ModalContainer from "./AddListModal/ModalContainer";
import ModalFooter from "./AddListModal/ModalFooter";
import ModalHeader from "./AddListModal/ModalHeader";

//* Interfaces
interface Props {
  children?: ReactNode;
  show: boolean;
  closeModalHandler: any;
  addListHandler: any;
}

const AddListModal = (props: Props) => {
  //* State
  const [listName, setListName] = useState<string>("");
  const [listColor, setListColor] = useState<string>("#ffffff");
  const canSave = listName && listColor !== "#ffffff" ? false : true;

  //* Helpers
  const resetState = () => {
    setListName("");
    setListColor("#ffffff");
  };

  //* Handlers
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setListName(e.target.value);
  const onSaveHandler = (): void => {
    const list = {
      name: listName,
      color: listColor,
    };
    props.addListHandler(list);
    resetState();
    props.closeModalHandler();
  };
  const onCloseHandler = (): void => {
    resetState();
    props.closeModalHandler();
  };

  if (!props.show) return null;

  return (
    <ModalContainer>
      <Backdrop closeModalHandler={onCloseHandler} />
      <Card style={{ width: "20%", zIndex: 11 }}>
        <ModalHeader
          name={listName}
          color={listColor}
          onNameChange={onChangeHandler}
        />
        <ModalColorPicker
          color={listColor}
          setColor={(color: string) => setListColor(color)}
        />
        <ModalFooter
          onSave={onSaveHandler}
          onClose={onCloseHandler}
          canSave={canSave}
        />
      </Card>
    </ModalContainer>
  );
};

export default AddListModal;
