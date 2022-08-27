import { UserActionTypes } from "~/redux/reducers/user/types";

export const addUsername = (username: string) => {
  return {
    type: UserActionTypes.LOGIN,
    payload: { username },
  };
};
