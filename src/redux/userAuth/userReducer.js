
import { SIGNIN_USER_FAILURE, SIGNIN_USER_REQUEST, SIGNIN_USER_SUCCESS, SIGNUP_USER_FAILURE, SIGNUP_USER_REQUEST, SIGNUP_USER_SUCCESS } from "./userTypes";

const initialState = { loading: false, user: null, error: null };

export const signinUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNIN_USER_REQUEST:
            return { ...state, loading: true }
        case SIGNIN_USER_SUCCESS:
            return { ...state, loading: false, user: action.payload }
        case SIGNIN_USER_FAILURE:
            return { ...state, loading: false, error: action.payload }
        default:
            return state
    }
}

export const signupUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_USER_REQUEST:
            return { ...state, loading: true }
        case SIGNUP_USER_SUCCESS:
            return { ...state, loading: false, user: action.payload }
        case SIGNUP_USER_FAILURE:
            return { ...state, loading: false, error: action.payload }
        default:
            return state
    }
}
