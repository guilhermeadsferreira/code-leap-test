import { Post } from "~/redux/reducers/post/types";

export type ModalProps = {
  show: boolean;
  post?: Post;
};
