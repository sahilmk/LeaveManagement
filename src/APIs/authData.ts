import { SuccessPayload } from "../Context/AuthContext/Auth.reducer";
import { post, get } from "../Util/ApiManager";
import { HostEndpoint } from "../Util/Endpoint";


export const setLoginData = (loginData: SuccessPayload) => {
  return window.localStorage.setItem("loginData", JSON.stringify(loginData));
};

export const callLoginPost = (values: { email: string; password: string }) => {
  return post(`${HostEndpoint}/login`, values);
};

export const callForgotPasswordPost = (values: { email: string }) => {
  return post(`${HostEndpoint}/user/requestResetPassword`, values);
};

export const callLogoutGet = (config: { headers: { Authorization: string } }) => {
  return get(`${HostEndpoint}/logout`, config);
};


