import { userConstants } from "../Pages/UserConstants";

export function registeration(state = {}, action) {
  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
      return {
        registering: true,
      };
    case userConstants.REGISTER_SUCCESS:
      return { registered: true };
    case userConstants.REGISTER_FAILURE:
      return {};
    default:
      return state;
  }
}
