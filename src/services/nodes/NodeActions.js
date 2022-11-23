import { nodeService } from "./NodeService";
import { nodeConstants } from "./NodeConstants";

export const nodeActions = {
  getNodeType,
  getNodeTotal,
  getNodeCountry,
  getNodeTotalbyAbroad,
  getUpdateTime,
};

function getNodeType(dispatch) {
  dispatch(request());
  nodeService.getNodeType().then(
    (item) => dispatch(success(item)),
    (error) => dispatch(failure(error.toString()))
  )

  function request() {
    return { type: nodeConstants.GET_NODETYPE_REQUEST };
  }
  function success(item) {
    return { type: nodeConstants.GET_NODETYPE_SUCCESS, item };
  }
  function failure(error) {
    return { type: nodeConstants.GET_NODETYPE_FAILURE, error };
  }
}

function getNodeTotal(dispatch) {
  dispatch(request());
  nodeService.getNodeTotal().then(
    (item) => dispatch(success(item)),
    (error) => dispatch(failure(error.toString()))
  );

  function request() {
    return { type: nodeConstants.GET_NODETOTAL_REQUEST };
  }
  function success(item) {
    return { type: nodeConstants.GET_NODETOTAL_SUCCESS, item };
  }
  function failure(error) {
    return { type: nodeConstants.GET_NODETOTAL_FAILURE, error };
  }
}

function getNodeCountry(dispatch) {
  dispatch(request());
  nodeService.getNodeCountry().then(
    (item) => dispatch(success(item)),
    (error) => dispatch(failure(error.toString()))
  );

  function request() {
    return { type: nodeConstants.GET_NODECOUNTRY_REQUEST };
  }
  function success(item) {
    return { type: nodeConstants.GET_NODECOUNTRY_SUCCESS, item };
  }
  function failure(error) {
    return { type: nodeConstants.GET_NODECOUNTRY_FAILURE, error };
  }
}

function getNodeTotalbyAbroad(dispatch) {
  dispatch(request());
  nodeService.getNodeTotalbyAbroad().then(
    (item) => dispatch(success(item)),
    (error) => dispatch(failure(error.toString()))
  );

  function request() {
    return { type: nodeConstants.GET_NODETOTALBYABROAD_REQUEST };
  }
  function success(item) {
    return { type: nodeConstants.GET_NODETOTALBYABROAD_SUCCESS, item };
  }
  function failure(error) {
    return { type: nodeConstants.GET_NODETOTALBYABROAD_FAILURE, error };
  }
}

function getUpdateTime(dispatch) {
  dispatch(request());
  nodeService.getUpdateTime().then(
    (item) => dispatch(success(item)),
    (error) => dispatch(failure(error.toString()))
  );

  function request() {
    return { type: nodeConstants.GET_UPDATETIME_REQUEST };
  }
  function success(item) {
    return { type: nodeConstants.GET_UPDATETIME_SUCCESS, item };
  }
  function failure(error) {
    return { type: nodeConstants.GET_UPDATETIME_FAILURE, error };
  }
}
