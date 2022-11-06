import { combineReducers } from "redux";
import usersReducer from "./users/reducer";
import counterReducer from "./counter/reducer";
import { signinUserReducer, signupUserReducer } from "./userAuth/userReducer";

const rootReducer = combineReducers({
  users: usersReducer,
  counter: counterReducer,
  signinReducer: signinUserReducer,
  signupReducer: signupUserReducer,
});

export default rootReducer;
