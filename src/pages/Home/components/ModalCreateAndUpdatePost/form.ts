import * as Yup from "yup";
import { Post } from "~/redux/reducers/post/types";

export const schema = Yup.object({
  title: Yup.string().required("Required field"),
  content: Yup.string().required("Required field"),
});

export const getFormInitialValues = (post?: Post) => {
  return {
    title: post?.title ?? "",
    content: post?.content ?? "",
  };
};
