import { authHeader } from './AuthHeader'
import { config } from "./AppConfig";
import { userService } from "./UserServices";

export const DataBaseService = {
  create,
  update,
  query,
  delete: _delete,
};

function create(sql) {
  const requestOptions = {
    method: "POST",
    headers: { ...authHeader(), "Content-Type:": "application/json" },
    body: JSON.stringify({ sql }),
  }

  return fetch(config.apiUrl + "/todo/api/v1.0/create", requestOptions)
    .then(handleResponse)
    .then((data) => {return data})
}

function query() {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  }

  return fetch(config.apiUrl + "/todo/api/v1.0/table", requestOptions).then(handleResponse)
}

function update(sql) {
  const requestOptions = {
    method: "PUT",
    headers: {...authHeader(), "Content-Type": "application/json" },
    body: JSON.stringify(sql),
  }

  return fetch(config.appUrl + "/todo/api/v1.0/update", requestOptions).then(handleResponse)
}

function _delete(id) {
  const requestOptions = {
    method: "DELETE",
    headers: authHeader(),
  }
  return fetch(config.appUrl + "/todo/api/v1.0/" + id, requestOptions).then(handleResponse)
}

function handleResponse(response) {
  return response.text().then((text) => {

    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        userService.logout();
        // eslint-disable-next-line no-restricted-globals
        location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}