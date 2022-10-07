import React, { useContext } from "react";
import { LoginContext } from "../Context/AuthContext";

const useAuthContext = () => {
  const context = useContext(LoginContext);

  if (!context) {
    throw Error("useAuthContext used outside auth context");
  }
  return context;
};

export default useAuthContext;