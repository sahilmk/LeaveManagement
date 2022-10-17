import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useAuthContext } from "./Hooks";
import {
  Dashboard,
  ForgotPassword,
  LoginPage,
  OTPPage,
  ResetPassword,
} from "./Pages";
import { getData } from "./Util";

function App() {
  const { state, dispatch } = useAuthContext();

  const checkUserDetails = () => {
    const storedData = getData("loginData");
    if (storedData) {
      dispatch({
        type: "FETCHED_SUCCESS",
        loggedIn: true,
        payload: storedData,
      });
    } else {
      dispatch({
        type: "FETCHED_FAILURE",
        loggedIn: false,
        payload: { error: "No login data found" },
      });
    }
  };

  useEffect(() => {
    dispatch({ type: "FETCHING", loggedIn: false });
    checkUserDetails();
  }, []);

  return (
    <Routes>
      {state.status === "loading" ? (
        <Route
          path="/"
          element={
            <div>
              <h4>Loading</h4>
            </div>
          }
        />
      ) : state.loggedIn ? (
        <Route path="/" element={<Dashboard />} />
      ) : (
        <Route path="/" element={<LoginPage />} />
      )}
      <Route path="/ForgotPassword" element={<ForgotPassword />} />
      <Route path="/OTP" element={<OTPPage />} />
      <Route path="/ResetPassword" element={<ResetPassword />} />
      <Route path="/Dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
