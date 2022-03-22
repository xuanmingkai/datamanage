import { combineReducers } from "redux";

import { authentication } from "./Authentication.reducer";
import { registeration } from "./Registration.reducer";
import { users } from "./Users.reducer";
import { alert } from "./Alert.reducer";

const rootReducer = combineReducers({
  authentication,
  registeration,
  users,
  alert,
});

export default rootReducer;
