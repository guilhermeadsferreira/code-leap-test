import { post } from "~/redux/reducers/post";

export const {
  useListPostsQuery,
  useLazyListPostsQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = post;
