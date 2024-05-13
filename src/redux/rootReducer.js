import { combineReducers } from "redux";
import todoReducer from "./reducers/todoReducer";

const appReducers = combineReducers({
  todo: todoReducer
});

const rootReducer = (state, action) => {
  return appReducers(state, action);
};

export default rootReducer;
