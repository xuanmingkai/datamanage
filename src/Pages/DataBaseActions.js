import { DataBaseConstants } from "./DataBaseConstants";
import { DataBaseService } from "./DataBaseServices";

export const DataBaseActions = {
  create,
  update,
  query,
  delete: _delete,
};

function create(sql) {
  return (dispatch) => {
    dispatch(request({ sql }));
  };

  function request(sql) {
    return { type: DataBaseConstants.CREATE_REQUEST, sql };
  }
  function success(sql) {
    return { type: DataBaseConstants.CREATE_SUCCESS, sql };
  }
  function failure(error) {
    return { type: DataBaseConstants.CREATE_FAILURE, error };
  }
}

function update(sql) {
  return (dispatch) => {
    dispatch(request({ sql }));
  };

  function request(sql) {
    return { type: DataBaseConstants.UPDATE_REQUEST, sql };
  }
  function success(sql) {
    return { type: DataBaseConstants.UPDATE_SUCCESS, sql };
  }
  function failure(error) {
    return { type: DataBaseConstants.UPDATE_FAILURE, error };
  }
}

function query() {
  return (dispatch) => {
    dispatch(request());
    DataBaseService.query().then(
      (res) => {
        dispatch(success(res))
      },
      (error) => {
        console.log(error.toString())
        dispatch(failure(error.toString()))
      }
    )
  };

  function request() {
    return { type: DataBaseConstants.QUERY_REQUEST };
  }
  function success(result) {
    return { type: DataBaseConstants.QUERY_SUCCESS, result };
  }
  function failure(error) {
    return { type: DataBaseConstants.QUERY_FAILURE, error };
  }
}

function _delete(sql) {
  return (dispatch) => {
    dispatch(request({ sql }));
  };

  function request(sql) {
    return { type: DataBaseConstants.DELETE_REQUEST, sql };
  }
  function success(sql) {
    return { type: DataBaseConstants.DELETE_SUCCESS, sql };
  }
  function failure(error) {
    return { type: DataBaseConstants.DELETE_FAILURE, error };
  }
}