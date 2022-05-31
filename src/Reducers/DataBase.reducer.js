import { DataBaseConstants } from "../Pages/DataBaseConstants";

export function database(state = {}, action) {
  switch (action.type) {
    case DataBaseConstants.CREATE_REQUEST:
      return {
        loading: true,
      }
    case DataBaseConstants.CREATE_SUCCESS:
      return {
        items: action.data,
      };
    case DataBaseConstants.CREATE_FAILURE:
      return {
        error: action.error,
      }
    case DataBaseConstants.UPDATE_REQUEST:
      return {
        loading: true,
      }
    case DataBaseConstants.UPDATE_SUCCESS:
      return {
        items: action.data,
      };
    case DataBaseConstants.UPDATE_FAILURE:
      return {
        error: action.error,
      }
    case DataBaseConstants.QUERY_REQUEST:
      return {
        loading: true,
      }
    case DataBaseConstants.QUERY_SUCCESS:
      return {
        items: action.result,
      };
    case DataBaseConstants.QUERY_FAILURE:
      return {
        error: action.error,
      }
    case DataBaseConstants.DELETE_REQUEST:
      return {
        loading: true,
      }
    case DataBaseConstants.DELETE_SUCCESS:
      return {
        items: action.data,
      };
    case DataBaseConstants.DELETE_FAILURE:
      return {
        error: action.error,
      }
    default:
      return state;
  }
}
