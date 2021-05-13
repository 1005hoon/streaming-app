import {
  GET_ALL_STREAMS,
  GET_ONE_STREAM,
  CREATE_STREAM,
  UPDATE_STREAM,
  DELETE_STREAM,
} from "../actions/types";

const streamReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_STREAMS:
      const fetchedStreams = action.payload.reduce((prev, cur) => {
        return {
          ...prev,
          [cur.id]: cur,
        };
      }, {});
      console.log(fetchedStreams);
      return {
        ...state,
        ...fetchedStreams,
      };
    case GET_ONE_STREAM:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    case CREATE_STREAM:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    case UPDATE_STREAM:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    case DELETE_STREAM:
      const prevStreams = { ...state };
      delete prevStreams[action.payload];
      return {
        ...prevStreams,
      };
    default:
      return state;
  }
};

export default streamReducer;
