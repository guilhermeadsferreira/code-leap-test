import { Post } from "~/redux/reducers/post/types";

export type PostProps = {
  post: Post;
  handleUpdatePost: (post: Post) => void;
};
