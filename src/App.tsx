import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useAuthContext } from "./Hooks";
import { ApprovedLeave, CancelledLeave, Dashboard, ForgotPassword, LeaveRequest, LoginPage, ManageLeaveRequest, OTPPage, PendingLeave, RejectedLeave, ResetPassword } from "./Pages";
import { approvedLeavesPath, cancelledLeavesPath, dashboardPath, departmentPath, employeeLeavesListPath, employeeListPath, forgotPasswordPath, holidayPath, homePath, leaveReasonPath, leaveRequestPath, leaveTypePath, manageLeaverequestPath, otpPath, pendingLeavesPath, rejectedLeavesPath, resetPasswordPath } from "./Util/Constants";
import { getData } from "./Util/Helper";
import './Styles/globalStyling.scss'

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
        <Route path="/" element={<Dashboard />} >
          <Route path={homePath} element={<h1>Home</h1>} />
          <Route path={holidayPath} element={<h1>Holidays</h1>} />
          <Route path={leaveRequestPath} element={<LeaveRequest logindate={"10-12-2036"} />} />
          <Route path={approvedLeavesPath} element={<ApprovedLeave logindate={"10-12-2036"} />} />
          <Route path={pendingLeavesPath} element={<PendingLeave logindate={"10-12-2036"} />} />
          <Route path={rejectedLeavesPath} element={<RejectedLeave logindate={"10-12-2036"} />} />
          <Route path={cancelledLeavesPath} element={<CancelledLeave logindate={"10-12-2036"} />} />
          <Route path={manageLeaverequestPath} element={<ManageLeaveRequest logindate={'10-12-2036'} />} />
          <Route path={employeeListPath} element={<h1>employeelist</h1>} />
          <Route path={employeeLeavesListPath} element={<h1>employeeleaveslist</h1>} />
          <Route path={leaveReasonPath} element={<h1>Leave Reason</h1>} />
          <Route path={leaveTypePath} element={<h1>leavetype</h1>} />
          <Route path={departmentPath} element={<h1>department</h1>} />
        </Route>
      ) : (
        <Route path="/" element={<LoginPage />} />
      )}
      <Route path={forgotPasswordPath} element={<ForgotPassword />} />
      <Route path={otpPath} element={<OTPPage />} />
      <Route path={resetPasswordPath} element={<ResetPassword />} />
      <Route path={dashboardPath} element={<Dashboard />} />
    </Routes>
  );

}

export default App;
