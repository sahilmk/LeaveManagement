import axios from "axios";

export const post = (url: string, data: any) => {
  return axios.post(`${url}`, data);
};
