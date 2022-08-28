import { api } from "~/services/api";
import { ListPostsParams, ListPostsResponse, Post } from "./types";

export const post = api.injectEndpoints({
  endpoints: (build) => ({
    listPosts: build.query<ListPostsResponse, ListPostsParams>({
      query: ({ next }) => next ?? "",
    }),
    createPost: build.mutation<string, { payload: Partial<Post> }>({
      query: ({ payload }) => ({
        body: {
          ...payload,
        },
        method: "POST",
        url: "",
      }),
    }),
    updatePost: build.mutation<string, { id: number; payload: Partial<Post> }>({
      query: ({ id, payload }) => ({
        body: {
          ...payload,
        },
        method: "PATCH",
        url: `/${id}/`,
      }),
    }),
  }),
  overrideExisting: false,
});
