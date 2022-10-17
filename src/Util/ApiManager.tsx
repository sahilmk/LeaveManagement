import axios from "axios";

export const post = (url: string, data: any, config: any = {}) => {
  return axios.post(`${url}`, data, config);
};

export const get = (url: string, config: { headers: { Authorization: string } }) => {
  return axios.get(`${url}`, config)
}
