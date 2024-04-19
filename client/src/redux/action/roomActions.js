import * as API from "../api/roomApi";
import * as types from "../constants/roomConstans";

export const GET_ROOM = () => async (dispatch) => {
  try {
    const response = await API.getRoom();
    const { error, data } = response;
    if (error) {
      dispatch({
        type: types.REQUEST_ERROR,
        payload: error,
      });
    } else {
      dispatch({
        type: types.ADD_ROOMS,
        payload: data,
      });
    }
  } catch (error) {
    console.error(error);
  }
};

export const GET_AVAIBLE_ROOMS = async (dispatch) => {
  try {
    const response = await API.getAvaibleRooms();
    const { error, data } = response;
    if (error) {
      dispatch({
        type: types.REQUEST_ERROR,
        payload: error,
      });
    } else {
      dispatch({
        type: types.SET_AVAILABLE_ROOM,
        payload: data,
      });
    }
  } catch (error) {
    console.error(error);
  }
};