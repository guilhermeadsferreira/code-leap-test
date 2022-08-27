import { combineReducers } from "@reduxjs/toolkit";
import { post } from "./post";
import user from "./user";

export default combineReducers({
  [post.reducerPath]: post.reducer,
  user,
});
