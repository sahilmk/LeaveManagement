import { SuccessPayload } from "../Context/AuthContext/Auth.reducer";

export const getData = (key: string) => {
  return JSON.parse(window.localStorage.getItem(key));
};

export const setLoginData = (loginData: SuccessPayload) => {
  return window.localStorage.setItem("loginData", JSON.stringify(loginData));
};

export const removeData = (key: string) => {
  return window.localStorage.removeItem(key);
};
