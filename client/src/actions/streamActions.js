import streams from "../apiRequest/streams";
import {
  GET_ALL_STREAMS,
  GET_ONE_STREAM,
  CREATE_STREAM,
  UPDATE_STREAM,
  DELETE_STREAM,
} from "./types";

export const getAllStreams = () => async (dispatch) => {
  const response = await streams.get("/streams");
  dispatch({
    type: GET_ALL_STREAMS,
    payload: response.data,
  });
};

export const getOneStream = (id) => async (dispatch) => {
  const response = await streams.get(`/streams/${id}`);
  dispatch({
    type: GET_ONE_STREAM,
    payload: response.data,
  });
};

export const createStream = (formValues) => async (dispatch, getState) => {
  const { user } = getState().auth;
  const response = await streams.post("/streams", { ...formValues, user });
  dispatch({
    type: CREATE_STREAM,
    payload: response.data,
  });
};

export const updateStream = (id, updateData) => async (dispatch) => {
  const response = await streams.patch(`/streams/${id}`, updateData);
  dispatch({
    type: UPDATE_STREAM,
    payload: response.data,
  });
};

export const deleteStream = (id) => async (dispatch) => {
  await streams.delete("/streams");
  dispatch({
    type: DELETE_STREAM,
    payload: id,
  });
};
