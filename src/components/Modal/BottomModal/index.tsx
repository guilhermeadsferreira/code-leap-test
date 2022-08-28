import React, { FC } from "react";
import { ModalProps } from "./BottomModal.types";
import { Modal } from "./styles";

const BottomModal: FC<ModalProps> = ({ show, children, ...rest }) => {
  return (
    <Modal isVisible={show} {...rest}>
      {children}
    </Modal>
  );
};

export default BottomModal;
