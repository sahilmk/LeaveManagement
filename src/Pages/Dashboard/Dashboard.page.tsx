import { Route, Routes } from "react-router-dom";
import { NavbarComponent, Sidebar } from "../../stories";
import LeaveRequest from "../LeaveRequest";
import ApprovedLeave from "../ApprovedLeaves";
import ProfilePage from "../Profile";
import PendingLeave from "../PendingLeaves";
import RejectedLeave from "../RejectedLeaves";
import CancelledLeave from "../CancelledLeaves";
import ManageLeaveRequest from "../ManageLeaveRequest";
import { sidebarTabData } from "../../Util/Constants";
import * as styles from "./Dashboard.module.scss";
import { getData } from "../../Util/Helper";


function Dashboard() {

  const loginData = getData("LoginData");

  const userName = loginData.data.user.employee.firstName + " " + loginData.data.user.employee.lastName;

  const userLoginData = loginData.data.user.lastLogin;


  return (
    <>
      <NavbarComponent user={userName} />
      <Sidebar user={userName} position={loginData.data.user.employee.designation} sidebarTabData={sidebarTabData} userImage={"./assets/images/profile.png"} />
      <div className={styles.maincontent}>
        <Routes>
          <Route path="/home" element={<ProfilePage />} />
          <Route path="/holidays" element={<h1>Holidays</h1>} />
          <Route path="leaverequest" element={<LeaveRequest logindate={userLoginData} />} />
          <Route path="/approvedleaves" element={<ApprovedLeave logindate={userLoginData} />} />
          <Route path="/pendingleaves" element={<PendingLeave logindate={userLoginData} />} />
          <Route path="/rejectedleaves" element={<RejectedLeave logindate={userLoginData} />} />
          <Route path="/cancelledleaves" element={<CancelledLeave logindate={userLoginData} />} />
          <Route path="/manageleaverequest" element={<ManageLeaveRequest logindate={userLoginData} />} />
          <Route path="/employeelist" element={<h1>employeelist</h1>} />
          <Route path="/employeeleaveslist" element={<h1>employeeleaveslist</h1>} />
          <Route path="/leavetype" element={<h1>leavetype</h1>} />
          <Route path="/department" element={<h1>department</h1>} />
        </Routes>
      </div>
    </>
  )
}

export default Dashboard;
