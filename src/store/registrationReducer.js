import { userConstants } from "../services/user/UserConstants";

export const initialState = {
  registering: false,
  registered: false
}

const registeration = (state = initialState, action) => {
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

export default registeration
