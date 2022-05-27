import React from "react";
import ModalButton from "./ModalButton";

interface Props {
  onClose: () => void;
  onSave: () => void;
  canSave: boolean;
}

const ModalFooter = ({ onClose, onSave, canSave }: Props) => {
  return (
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <ModalButton onClick={onClose}>Cancel</ModalButton>
      <ModalButton onClick={onSave} disabled={canSave}>
        Save
      </ModalButton>
    </div>
  );
};

export default ModalFooter;
