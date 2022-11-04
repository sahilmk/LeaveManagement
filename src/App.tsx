import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useAuthContext } from "./Hooks";
import {
  ApprovedLeave,
  CancelledLeave,
  Dashboard,
  ForgotPassword,
  LeaveRequest,
  LoginPage,
  ManageLeaveRequest,
  OTPPage,
  PendingLeave,
  ProfilePage,
  RejectedLeave,
  ResetPassword,
} from "./Pages";
import { ROUTES } from "./Util/Constants";
import { getData } from "./Util/Helper";
import "./Styles/globalStyling.scss";

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
          <Route path={ROUTES.profilePath} element={<ProfilePage />} />
          <Route path={ROUTES.homePath} element={<h1>Home</h1>} />
          <Route path={ROUTES.holidayPath} element={<h1>Holidays</h1>} />
          <Route
            path={ROUTES.leaveRequestPath}
            element={<LeaveRequest logindate={"10-12-2036"} />}
          />
          <Route
            path={ROUTES.approvedLeavesPath}
            element={<ApprovedLeave logindate={"10-12-2036"} />}
          />
          <Route
            path={ROUTES.pendingLeavesPath}
            element={<PendingLeave logindate={"10-12-2036"} />}
          />
          <Route
            path={ROUTES.rejectedLeavesPath}
            element={<RejectedLeave logindate={"10-12-2036"} />}
          />
          <Route
            path={ROUTES.cancelledLeavesPath}
            element={<CancelledLeave logindate={"10-12-2036"} />}
          />
          <Route
            path={ROUTES.manageLeaverequestPath}
            element={<ManageLeaveRequest logindate={"10-12-2036"} />}
          />
          <Route
            path={ROUTES.employeeListPath}
            element={<h1>employeelist</h1>}
          />
          <Route
            path={ROUTES.employeeLeavesListPath}
            element={<h1>employeeleaveslist</h1>}
          />
          <Route
            path={ROUTES.leaveReasonPath}
            element={<h1>Leave Reason</h1>}
          />
          <Route path={ROUTES.leaveTypePath} element={<h1>leavetype</h1>} />
          <Route path={ROUTES.departmentPath} element={<h1>department</h1>} />
        </Route>
      ) : (
        <Route path="/" element={<LoginPage />} />
      )}
      <Route path={ROUTES.forgotPasswordPath} element={<ForgotPassword />} />
      <Route path={ROUTES.otpPath} element={<OTPPage />} />
      <Route path={ROUTES.resetPasswordPath} element={<ResetPassword />} />
      <Route path={ROUTES.dashboardPath} element={<Dashboard />} />
    </Routes>
  );
}

export default App;
