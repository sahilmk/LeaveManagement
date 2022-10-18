import { HostEndpoint } from "../Util/Endpoint";
import { get, post } from "../Util/ApiManager";

export const callProfilePageGet = (
  userId: number,
  config: { headers: { Authorization: string } }
) => {
  return get(`${HostEndpoint}/user/${userId}`, config);
};

export const callProfileUpdatePost = (
  employeeId: number,
  data: any,
  config: { headers: { Authorization: string } }
) => {
  return post(`${HostEndpoint}/employee/${employeeId}`, data, config);
};
