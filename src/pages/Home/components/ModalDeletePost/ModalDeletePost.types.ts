import { ModalData } from "../../Home.types";

export type ModalProps = {
  data: ModalData;
  closeModal: () => void;
  refetchPosts: () => void;
};
