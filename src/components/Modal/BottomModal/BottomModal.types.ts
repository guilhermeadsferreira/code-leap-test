import { ReactNode } from "react";

export type ModalProps = {
  children: ReactNode;
  show: boolean;
  onBackButtonPress?: () => void;
  onBackdropPress?: () => void;
};
