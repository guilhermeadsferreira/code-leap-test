import { Post } from "~/redux/reducers/post/types";

export type ModalProps = {
  data: {
    show: boolean;
    post?: Post;
  };
  closeModal: () => void;
  refetchPosts: () => void;
};
