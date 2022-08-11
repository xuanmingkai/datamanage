import { combineReducers } from "redux";

import customizationReducer from "./customizationReducer";
import importfilesReducer from './importfilesReducer'

const reducer = combineReducers({
  customization: customizationReducer,
  importfiles: importfilesReducer
});

export default reducer;
