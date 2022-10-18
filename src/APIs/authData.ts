import { SuccessPayload } from "../Contexts/AuthContext/Auth.reducer";
import { post, get } from "../Util/ApiManager";
import { HostEndpoint } from "../Util/Endpoint";

//To set Login Data in Local Storage
export const setLoginData = (loginData: SuccessPayload) => {
  return window.localStorage.setItem("loginData", JSON.stringify(loginData));
};

//To Login into the application
export const callLoginPost = (values: { email: string; password: string }) => {
  return post(`${HostEndpoint}/login`, values);
};

//To change Forget Password
export const callForgotPasswordPost = (values: { email: string }) => {
  return post(`${HostEndpoint}/user/requestResetPassword`, values);
};

//To LogOut from application
export const callLogoutGet = (config: {
  headers: { Authorization: string };
}) => {
  return get(`${HostEndpoint}/logout`, config);
};
