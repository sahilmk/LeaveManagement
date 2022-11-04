import { Route, Routes } from "react-router-dom";
import { NavbarComponent, Sidebar } from "../../stories";
import LeaveRequest from "../LeaveRequest";
import ApprovedLeave from "../ApprovedLeaves";
import ProfilePage from "../Profile";
import PendingLeave from "../PendingLeaves";
import RejectedLeave from "../RejectedLeaves";
import CancelledLeave from "../CancelledLeaves";
import ManageLeaveRequest from "../ManageLeaveRequest";
import { ROUTES, SIDEBARTABDATA } from "../../Util/Constants";
import { getData } from "../../Util/Helper";
import styles from "./Dashboard.module.scss";

function Dashboard() {
  const loginData = getData("loginData");

  const userName =
    loginData.data.user.employee.firstName +
    " " +
    loginData.data.user.employee.lastName;

  const userLoginData = loginData.data.user.lastLogin.split(" ")[0];

  return (
    <>
      <NavbarComponent user={userName} />
      <Sidebar
        user={userName}
        position={loginData.data.user.employee.designation}
        sidebarTabData={SIDEBARTABDATA}
        userImage={"./assets/images/profile.png"}
      />
      <div className={styles.maincontent}>
        <Routes>
          <Route path={ROUTES.profilePath} element={<ProfilePage />} />
          <Route
            path={ROUTES.homePath}
            element={<h1 className="emptypage">Home</h1>}
          />
          <Route
            path={ROUTES.holidayPath}
            element={<h1 className="emptypage">Holidays</h1>}
          />
          <Route
            path={ROUTES.leaveRequestPath}
            element={<LeaveRequest logindate={userLoginData} />}
          />
          <Route
            path={ROUTES.approvedLeavesPath}
            element={<ApprovedLeave logindate={userLoginData} />}
          />
          <Route
            path={ROUTES.pendingLeavesPath}
            element={<PendingLeave logindate={userLoginData} />}
          />
          <Route
            path={ROUTES.rejectedLeavesPath}
            element={<RejectedLeave logindate={userLoginData} />}
          />
          <Route
            path={ROUTES.cancelledLeavesPath}
            element={<CancelledLeave logindate={userLoginData} />}
          />
          <Route
            path={ROUTES.manageLeaverequestPath}
            element={<ManageLeaveRequest logindate={userLoginData} />}
          />
          <Route
            path={ROUTES.employeeListPath}
            element={<h1 className="emptypage">Employee List</h1>}
          />
          <Route
            path={ROUTES.employeeLeavesListPath}
            element={<h1 className="emptypage">Employee Leaves List</h1>}
          />
          <Route
            path={ROUTES.leaveReasonPath}
            element={<h1 className="emptypage">Leave Reason</h1>}
          />
          <Route
            path={ROUTES.leaveTypePath}
            element={<h1 className="emptypage">Leave Type</h1>}
          />
          <Route
            path={ROUTES.departmentPath}
            element={<h1 className="emptypage">Department</h1>}
          />
        </Routes>
      </div>
    </>
  );
}

export default Dashboard;
