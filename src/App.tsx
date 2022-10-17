import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { ApprovedLeave, LeaveRequest } from "./components";
import { useAuthContext } from "./Hooks";
import {
  Dashboard,
  ForgotPassword,
  LoginPage,
  OTPPage,
  ResetPassword,
} from "./Pages";

import { ProfilePage } from "../src/Pages";
import { getData } from "./Util/Helper";
import { routes } from "./Util/routes";

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
        <Route path="/" element={<Dashboard />}>
          <Route path={routes.homePath} element={<ProfilePage />} />
          <Route path={routes.holidayPath} element={<h1>Holidays</h1>} />
          <Route
            path={routes.leaveRequestPath}
            element={<LeaveRequest logindate={"10-12-2036"} />}
          />
          <Route
            path={routes.approvedLeavesPath}
            element={<ApprovedLeave logindate={"10-12-2036"} />}
          />
          <Route
            path={routes.pendingLeavesPath}
            element={<h1>Pending Leaves</h1>}
          />
          <Route
            path={routes.rejectedLeavesPath}
            element={<h1>Rejected Leaves</h1>}
          />
          <Route
            path={routes.cancelledLeavesPath}
            element={<h1>Cancelled Leaves</h1>}
          />
          <Route
            path={routes.manageLeaverequestPath}
            element={<h1>manageleaverequest</h1>}
          />
          <Route
            path={routes.employeeListPath}
            element={<h1>employeelist</h1>}
          />
          <Route
            path={routes.employeeLeavesListPath}
            element={<h1>employeeleaveslist</h1>}
          />
          <Route
            path={routes.leaveReasonPath}
            element={<h1>Leave Reason</h1>}
          />
          <Route path={routes.leaveTypePath} element={<h1>leavetype</h1>} />
          <Route path={routes.departmentPath} element={<h1>department</h1>} />
        </Route>
      ) : (
        <Route path="/" element={<LoginPage />} />
      )}
      <Route path={routes.forgotPasswordPath} element={<ForgotPassword />} />
      <Route path={routes.otpPath} element={<OTPPage />} />
      <Route path={routes.resetPasswordPath} element={<ResetPassword />} />
      <Route path={routes.dashboardPath} element={<Dashboard />} />
    </Routes>
  );
}

export default App;
