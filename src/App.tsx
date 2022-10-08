import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useAuthContext } from "./Hooks";
import { ApprovedLeave, CancelledLeave, Dashboard, ForgotPassword, LeaveRequest, LoginPage, OTPPage, PendingLeave, RejectedLeave, ResetPassword } from "./Pages";
import { getData } from "./Util/Helper";

function App() {
  const { state, dispatch } = useAuthContext();

  const checkUserDetails = () => {
    const storedData = getData("LoginData");
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
          <Route path="/home" element={<h1>Home</h1>} />
          <Route path="/holidays" element={<h1>Holidays</h1>} />
          <Route path="/leaverequest" element={<LeaveRequest logindate={"10-12-2036"} />} />
          <Route path="/approvedleaves" element={<ApprovedLeave logindate={"10-12-2036"} />} />
          <Route path="/pendingleaves" element={<PendingLeave logindate={"10-12-2036"} />} />
          <Route path="/rejectedleaves" element={<RejectedLeave logindate={"10-12-2036"} />} />
          <Route path="/cancelledleaves" element={<CancelledLeave logindate={"10-12-2036"} />} />
          <Route path="/manageleaverequest" element={<h1>manageleaverequest</h1>} />
          <Route path="/employeelist" element={<h1>employeelist</h1>} />
          <Route path="/employeeleaveslist" element={<h1>employeeleaveslist</h1>} />
          <Route path="/leavetype" element={<h1>leavetype</h1>} />
          <Route path="/department" element={<h1>department</h1>} />
        </Route>
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
