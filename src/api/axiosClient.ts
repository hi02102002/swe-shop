import axios from 'axios';
import queryString from 'query-string';
export const request = axios.create({
   baseURL: 'https://6223ad753af069a0f9a7e199.mockapi.io/api/',
   paramsSerializer: (params) => queryString.stringify(params),
});
