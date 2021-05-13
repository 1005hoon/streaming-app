import { CHANGE_INPUT } from "../actions/types";

const INITIAL_STATE = {
  title: "",
  description: "",
};

const formReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };

    default:
      return state;
  }
};

export default formReducer;
