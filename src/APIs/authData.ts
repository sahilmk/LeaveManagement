import { SuccessPayload } from "../Context/AuthContext/Auth.reducer";
import { HostEndpoint, post } from "../Util";

export const setLoginData = (loginData: SuccessPayload) => {
  return window.localStorage.setItem("LoginData", JSON.stringify(loginData));
};

export const callLoginPost = (values: { email: string; password: string }) => {
  return post(`${HostEndpoint}/login`, values);
};

export const callForgotPasswordPost = (values: { email: string }) => {
  return post(`${HostEndpoint}/user/requestResetPassword`, values);
};

export const callLogoutPost = (token: string) => {
  return post(`${HostEndpoint}/logout`, token);
};
