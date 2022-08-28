import React, { FC } from "react";
import { ModalProps } from "./BottomModal.types";
import { Modal, Container, Scroll, Wrapper } from "./styles";

const BottomModal: FC<ModalProps> = ({ show, children, ...rest }) => {
  return (
    <Modal isVisible={show} {...rest}>
      <Container>
        <Scroll>
          <Wrapper>{children}</Wrapper>
        </Scroll>
      </Container>
    </Modal>
  );
};

export default BottomModal;
