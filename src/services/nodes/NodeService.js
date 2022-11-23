import { authHeader } from "../user/AuthHeader";
import config from "../../config";

export const nodeService = {
  getNodeType,
  getNodeTotal,
  getNodeCountry,
  getNodeTotalbyAbroad,
  getUpdateTime,

  setUpdateTime,
};

function getNodeType() {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };
  return fetch(`${config.apiUrl}/node/nodetype`, requestOptions).then(handleResponse);
}

function getNodeTotal() {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };
  return fetch(`${config.apiUrl}/node/nodetotal`, requestOptions).then(handleResponse);
}

function getNodeCountry() {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };
  return fetch(`${config.apiUrl}/node/nodecountry`, requestOptions).then(handleResponse);
}

function getNodeTotalbyAbroad() {
  const auth = authHeader();
  const _headers = new Headers({ auth });
  // _headers.append('Access-Control-Request-Origin','*')

  const requestOptions = {
    method: "GET",
    headers: _headers,
  };

  return fetch(`${config.apiUrl}/search/data/total`, requestOptions).then(handleResponse);
}

function getUpdateTime() {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };
  return fetch(`${config.apiUrl}/node/updatetime`, requestOptions).then(handleResponse);
}

function setUpdateTime(timer) {
  const requestOptions = {
    method: "PUT",
    headers: { ...authHeader(), "Content-Type": "application/json" },
  };
  return fetch(`${config.apiUrl}/node/${timer}`, requestOptions).then(
    handleResponse
  );
}

function logout() {
  localStorage.removeItem("user")
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        logout();
        location.reload(true);
      }
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
}
