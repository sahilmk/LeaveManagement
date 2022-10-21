import { HostEndpoint } from "../Util/Endpoint";
import { get, post } from "../Util/ApiManager";

//To get Profile details from the API
export const callProfilePageGet = (
  userId: number,
  config: { headers: { Authorization: string } }
) => {
  return get(`${HostEndpoint}/user/${userId}`);
};

//To update Profile data
export const callProfileUpdatePost = (
  employeeId: number,
  data: any,
  config: { headers: { Authorization: string } }
) => {
  return post(`${HostEndpoint}/employee/${employeeId}`, data);
};

//To change Password
export const callPasswordChange = (
  data: any,
  config: { headers: { Authorization: string } }
) => {
  return post(`${HostEndpoint}/user/changePassword`, data);
};
