import { HostEndpoint, post, get } from "../Util";

export const callLoginPost = (values: { email: string; password: string }) => {
  return post(`${HostEndpoint}/login`, values);
};

export const callForgotPasswordPost = (values: { email: string }) => {
  return post(`${HostEndpoint}/user/requestResetPassword`, values);
};

export const callLogoutGet = (config: { headers: { Authorization: string } }) => {
  return get(`${HostEndpoint}/logout`, config);
};
