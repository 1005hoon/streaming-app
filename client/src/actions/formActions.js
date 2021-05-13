import { CHANGE_INPUT, RESET_INPUT } from "./types";

export const changeInput = (key, value) => {
  return { type: CHANGE_INPUT, payload: { key, value } };
};

export const resetInput = () => {
  return { type: RESET_INPUT };
};
