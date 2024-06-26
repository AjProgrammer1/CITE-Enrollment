import * as types from "../constants/authConstants";

const initialState = {
  userData: null,
  successMessage: null,
  loginError: null,
  accessToken: null,
  requestError: null,
  errorMessage: null,
  requestSuccess: null,
  logoutSuccess: null,
  logoutError: null,
  logoutFail: null,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.LOGIN:
      return {
        ...state,
        successMessage: payload ? payload : null,
      };

    case types.LOG_IN_SUCCESS:
      return {
        ...state,
        userData: payload ? payload.user : null,
        accessToken: payload ? payload : null,
        loginError: null,
      };

    case types.LOG_IN_FAIL:
      return {
        ...state,
        successMessage: null,
        loginError: payload ? payload : null,
      };

    case types.LOGOUT:
      return {
        ...state,
        userData: null,
        successMessage: null,
        loginError: null,
        accessToken: null,
        requestError: null,
        errorMessage: null,
        requestSuccess: null,
      };

    case types.SET_USER_DATA:
      return {
        ...state,
        userData: payload ? payload : null,
      };

    case types.REQ_ERROR:
      return {
        ...state,
        requestError: payload ? payload : null,
      };

    case types.REQ_SUCCESS:
      return {
        ...state,
        requestSuccess: payload ? payload : null,
        successMessage: payload ? payload.message : null,
      };

    case type.SET_NULL_SUCCESS: {
      return {
        ...state,
        requestSuccess: null,
        successMessage: null,
      };
    }
    default:
      return state;
  }
};

export default authReducer;
