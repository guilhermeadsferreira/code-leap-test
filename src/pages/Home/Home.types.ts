import { Post } from "~/redux/reducers/post/types";

export type ModalData = {
  show: boolean;
  post?: Post;
};
