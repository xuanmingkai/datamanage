import config from "../config";

import { actionTypes } from "./constant";

export const initialState = {
  isOpen: [],
  fontFamily: config.fontFamily,
  borderRadius: config.borderRadius,
  opened: true,
  statusTimer: false,
};

const customizationReducer = (state = initialState, action) => {
  let id;
  switch (action.type) {
    case actionTypes.MENU_OPEN:
      id = action.id;
      return {
        ...state,
        isOpen: [id],
      };
    case actionTypes.SET_MENU:
      return {
        ...state,
        opened: action.opened,
      };
    case actionTypes.SET_FONT_FAMILY:
      return {
        ...state,
        fontFamily: action.fontFamily,
      };
    case actionTypes.SET_BOARDER_RADIUS:
      return {
        ...state,
        borderRadius: action.borderRadius,
      };
    case actionTypes.STATUS_TIMER:
      return {
        ...state,
        statusTimer: action.statusTimer,
      };
    default:
      return state;
  }
};

export default customizationReducer;
