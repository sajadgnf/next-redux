import Router from "next/router";
import toast from "react-hot-toast";
import {
  SIGNIN_USER_REQUEST,
  SIGNIN_USER_SUCCESS,
  SIGNIN_USER_FAILURE,
  SIGNUP_USER_REQUEST,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAILURE,
  SIGNOUT_USER,
} from "./userTypes";

export const signinUserRequest = () => {
  return { type: SIGNIN_USER_REQUEST };
};
export const signinUserSuccess = (user) => {
  return { type: SIGNIN_USER_SUCCESS, payload: user };
};
export const signinUserFailure = (error) => {
  return { type: SIGNIN_USER_FAILURE, payload: error };
};

export const signupUserRequest = () => {
  return { type: SIGNUP_USER_REQUEST };
};
export const signupUserSuccess = (user) => {
  return { type: SIGNUP_USER_SUCCESS, payload: user };
};
export const signupUserFailure = (error) => {
  return { type: SIGNUP_USER_FAILURE, payload: error };
};

export const signinUser = (data) => (dispatch) => {
  dispatch(signinUserRequest());
  axios
    .post(`/user/signin`, data)
    .then(({ data }) => {
      dispatch(signinUserSuccess(data));
      toast.success(`${data.name} خوش آمدید!`);
      Router.push("/");
    })
    .catch((err) => {
      const errorMessage =
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message;
      dispatch(signinUserFailure(errorMessage));
      toast.error(errorMessage);
    });
};

export const signupUser = (data) => (dispatch) => {
  dispatch(signupUserRequest());
  axios
    .post(`/user/signup`, data)
    .then(({ data }) => {
      dispatch(signupUserSuccess(data));
      dispatch(signinUserSuccess(data));
      toast.success("ثبت نام شما با موفقیت انجام شد");
      Router.push("/");
    })
    .catch((err) => {
      const errorMessage =
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message;
      dispatch(signinUserFailure(errorMessage));
      toast.error(errorMessage);
    });
};

export const signoutUser = () => (dispatch) => {
  dispatch({ type: SIGNOUT_USER });
  axios
    .get(`/user/logout`)
    .then(({ data }) => {
      window.location.href = "./";
    })
    .catch();
};

export const loadUserData = (store) => {
  axios
    .get(`/user/load`)
    .then(({ data }) => {
      store.dispatch(signinUserSuccess(data));
    })
    .catch();
};
