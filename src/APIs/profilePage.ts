import { HostEndpoint } from "../Util/Endpoint";
import { get, post } from "../Util/ApiManager";

//To get Profile details from the API
export const callProfilePageGet = (
  userId: number,
  config: { headers: { Authorization: string } }
) => {
  return get(`${HostEndpoint}/user/${userId}`, config);
};

//To update Profile data
export const callProfileUpdatePost = (
  employeeId: number,
  data: any,
  config: { headers: { Authorization: string } }
) => {
  return post(`${HostEndpoint}/employee/${employeeId}`, data, config);
};
