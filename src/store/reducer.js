import { combineReducers } from "redux";

import customizationReducer from "./customizationReducer";
import importfilesReducer from "./importfilesReducer";
import registerationReducer from "./registrationReducer";
import authenticationReducer from "./authenticationReducer";
import usersReducer from "./usersReducer";

const reducer = combineReducers({
  customization: customizationReducer,
  importfiles: importfilesReducer,
  registeration: registerationReducer,
  authentication: authenticationReducer,
  users: usersReducer,
});

export default reducer;
