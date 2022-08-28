import { api } from "~/services/api";
import { ResponsePost } from "./types";

export const post = api.injectEndpoints({
  endpoints: (build) => ({
    listPosts: build.query<ResponsePost, void>({
      query: () => "",
    }),
    // createPost: build.mutation<string, { payload: Partial<TGameRequest>; userId: string }>({
    //   invalidatesTags: ['Game'],
    //   query: ({ userId, payload }) => ({
    //     body: {
    //       user: userId,
    //       ...payload,
    //     },
    //     method: 'POST',
    //     url: '/games/',
    //   }),
    // }),
    // updatePost: build.mutation<string, { payload: Partial<TGameRequest>; userId: string }>({
    //   invalidatesTags: ['Game'],
    //   query: ({ userId, payload }) => ({
    //     body: {
    //       user: userId,
    //       ...payload,
    //     },
    //     method: 'PATCH',
    //     url: `/games/${payload.id}/`,
    //   }),
    // }),
  }),
  overrideExisting: false,
});