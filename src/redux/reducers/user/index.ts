import { Reducer } from "redux";
import { UserActionTypes, UserReducerState } from "./types";

const INITIAL_STATE = {
  username: "",
};

const reducer: Reducer<UserReducerState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.LOGIN: {
      return {
        ...state,
        username: action.payload.username,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
