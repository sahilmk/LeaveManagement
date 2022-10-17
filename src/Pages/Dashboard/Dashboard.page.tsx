import { Route, Routes } from "react-router-dom";
import { Navbar, Sidebar } from "../../stories";
import { LeaveRequest } from "../../components";
import {
  departmentPage,
  employeeLeaveListPage,
  employeeListPage,
  holidaysPage,
  homePage,
  leaveRequestPages,
  leavetypePage,
  manageLeaveRequestPage,
} from "../../Util/routes";
import { sidebarTabData } from "../../Util/Constants";
import * as styles from "./Dashboard.module.scss";
import { ProfilePage } from "..";

function Dashboard() {
  return (
    <>
      <Navbar />
      <Sidebar
        user="John Doe"
        position="Admin"
        sidebarTabData={sidebarTabData}
        userImage={"./assets/images/profile.png"}
      />
      <div className={styles.maincontent}>
        <Routes>
          <Route path={homePage} element={<ProfilePage />} />
          <Route path={holidaysPage} element={<h1>Holidays</h1>} />
          <Route
            path={leaveRequestPages}
            element={<LeaveRequest logindate={"18/10/2022"} />}
          />
          <Route
            path={manageLeaveRequestPage}
            element={<h1>manageleaverequest</h1>}
          />
          <Route path={employeeListPage} element={<h1>employeelist</h1>} />
          <Route
            path={employeeLeaveListPage}
            element={<h1>employeeleaveslist</h1>}
          />
          <Route path={leavetypePage} element={<h1>leavetype</h1>} />
          <Route path={departmentPage} element={<h1>department</h1>} />
        </Routes>
      </div>
    </>
  );
}

export default Dashboard;
