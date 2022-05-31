import { combineReducers } from "redux";

import { authentication } from "./Authentication.reducer";
import { registeration } from "./Registration.reducer";
import { users } from "./Users.reducer";
import { alert } from "./Alert.reducer";
import { database } from "./DataBase.reducer"

const rootReducer = combineReducers({
  authentication,
  registeration,
  users,
  alert,
  database,
});

export default rootReducer;
