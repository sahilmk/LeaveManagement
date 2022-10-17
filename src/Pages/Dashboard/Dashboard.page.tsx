import { Outlet, Route, Routes } from "react-router";
import { ProfilePage } from "..";
import { ApprovedLeave, LeaveRequest } from "../../components";
import { Navbar, Sidebar } from "../../stories";
import { sidebarTabData } from "../../Util/Constants";
import { getData } from "../../Util/Helper";
import { routes } from "../../Util/routes";
import * as styles from "./Dashboard.module.scss";

function Dashboard() {
  const loginData = getData("loginData");

  const userName =
    loginData.data.user.employee.firstName +
    " " +
    loginData.data.user.employee.lastName;

  return (
    <>
      <Navbar user={userName} />

      <Sidebar
        user={userName}
        position="Admin"
        sidebarTabData={sidebarTabData}
        userImage={"./assets/images/profile.png"}
      />

      <div className={styles.maincontent}>
        <Outlet>
          <Routes>
            <Route path={routes.homePath} element={<ProfilePage />} />
            <Route path={routes.holidayPath} element={<h1>Holidays</h1>} />
            <Route
              path={routes.leaveRequestPath}
              element={<LeaveRequest logindate={loginData} />}
            />
            <Route
              path={routes.approvedLeavesPath}
              element={<ApprovedLeave logindate={loginData} />}
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
              element={<h1>Manage Leave Requests</h1>}
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
          </Routes>
        </Outlet>
      </div>
    </>
  );
}

export default Dashboard;
