import { combineReducers } from "redux";

import customizationReducer from "./customizationReducer";
import importfilesReducer from './importfilesReducer'
import registerationReducer from "./registrationReducer";
import authenticationReducer from "./authenticationReducer"

const reducer = combineReducers({
  customization: customizationReducer,
  importfiles: importfilesReducer,
  registeration: registerationReducer,
  authentication: authenticationReducer
});

export default reducer;
