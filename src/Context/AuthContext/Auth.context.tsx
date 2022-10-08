import React, { createContext, useReducer } from "react";
import {
  Dispatch,
  initialState,
  LoginReducer,
  LoginState,
} from "./Auth.reducer";

export const LoginContext =
  createContext<{ state: LoginState; dispatch: Dispatch } | undefined>(
    undefined
  );

type LoginContextType = {
  children: React.ReactNode;
};

export const LoginContextProvider = ({ children }: LoginContextType) => {
  const [state, dispatch] = useReducer(LoginReducer, initialState);

  const value = { state, dispatch };

  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
};
