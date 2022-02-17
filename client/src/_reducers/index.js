import { combineReducers } from "redux";
import user from "./user_reducer";

const rootReducer = combineReducers({
  user,
});

export default rootReducer;

// state가 여러가지이면(user, post, comment) 여러가지 reducer가 있을수 있는데 combineReducers 이용해서 RootReducer 하나로 합쳐줌.
