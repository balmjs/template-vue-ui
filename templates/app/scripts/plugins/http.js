import axios from 'axios';
import { useBus } from 'balm-ui';
import { API_ENDPOINT } from '@/config';

const statusCodes = {
  // Successful
  OK: 200, // get, patch (return a JSON object)
  Created: 201, // post (return a JSON object)
  Accepted: 202, // post, delete, path - async
  NoContent: 204, // delete
  PartialContent: 206, // get - async
  // Error
  Unauthorized: 401, // Not authenticated
  Forbidden: 403, // Authenticated, but no permissions
  UnprocessableEntity: 422 // Validation
};

const successStatusCodes = [
  statusCodes.OK,
  statusCodes.Created,
  statusCodes.Accepted,
  statusCodes.NoContent,
  statusCodes.PartialContent
];

const httpErrorMessage = {
  default: 'Operation failure',
  response: 'Response error',
  request: 'Request error',
  unknown: 'Unknown error'
};

const bus = useBus();

function errorHandler({ message }) {
  bus.emit('on-error', message || httpErrorMessage.default);
}

axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    const { status, data, message } = response;

    if (successStatusCodes.includes(status)) {
      // TODO: custom response handler
      return Promise.resolve(data);
    } else {
      errorHandler({ status, message });

      return Promise.reject(data);
    }
  },
  (error) => {
    // TODO: custom error handler
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      bus.emit('on-error', httpErrorMessage.response);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      bus.emit('on-error', httpErrorMessage.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      bus.emit('on-error', httpErrorMessage.unknown);
    }

    return Promise.reject(error);
  }
);

const useHttp = () => axios;

export default {
  install(app) {
    axios.defaults.baseURL = API_ENDPOINT;
    // axios.defaults.withCredentials = true;

    app.config.globalProperties.$http = axios;
    app.provide('http', axios);
  }
};
export { useHttp };
