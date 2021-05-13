import { CHANGE_INPUT } from "./types";

export const changeInput = (key, value) => {
  return { type: CHANGE_INPUT, payload: { key, value } };
};
