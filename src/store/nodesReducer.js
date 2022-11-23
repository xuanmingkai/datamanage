import { nodeConstants } from "../services/nodes/NodeConstants";

const nodes = (state = {}, action) => {
  switch (action.type) {
    case nodeConstants.GET_NODETYPE_REQUEST:
      return {
        loading: true,
      };
    case nodeConstants.GET_NODETYPE_SUCCESS:
      return {
        nodetype: action.item,
      };
    case nodeConstants.GET_NODETYPE_FAILURE:
      return {
        error: action.error,
      };

    case nodeConstants.GET_NODECOUNTRY_REQUEST:
      return {
        loading: true,
      };
    case nodeConstants.GET_NODECOUNTRY_SUCCESS:
      return {
        nodecountry: action.item,
      };
    case nodeConstants.GET_NODECOUNTRY_FAILURE:
      return {
        error: action.error,
      };

    case nodeConstants.GET_NODETOTAL_REQUEST:
      return {
        loading: true,
      };
    case nodeConstants.GET_NODETOTAL_SUCCESS:
      return {
        nodetotal: action.item,
      };
    case nodeConstants.GET_NODETOTAL_FAILURE:
      return {
        error: action.error,
      };

    case nodeConstants.GET_NODETOTALBYABROAD_REQUEST:
      return {
        loading: true,
      };
    case nodeConstants.GET_NODETOTALBYABROAD_SUCCESS:
      return {
        totalbyabroad: action.item,
      };
    case nodeConstants.GET_NODETOTALBYABROAD_FAILURE:
      return {
        error: action.error,
      };

    case nodeConstants.GET_UPDATETIME_REQUEST:
      return {
        loading: true,
      };
    case nodeConstants.GET_UPDATETIME_SUCCESS:
      return {
        updateime: action.item,
      };
    case nodeConstants.GET_UPDATETIME_FAILURE:
      return {
        error: action.error,
      };

    default:
      return state;
  }
};

export default nodes;
