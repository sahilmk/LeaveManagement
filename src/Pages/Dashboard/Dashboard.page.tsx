import { Route, Routes } from "react-router-dom";
import { NavbarComponent, Sidebar } from "../../stories";
import LeaveRequest from "../LeaveRequest";
import ApprovedLeave from "../ApprovedLeaves";
import ProfilePage from "../Profile";
import PendingLeave from "../PendingLeaves";
import RejectedLeave from "../RejectedLeaves";
import CancelledLeave from "../CancelledLeaves";
import ManageLeaveRequest from "../ManageLeaveRequest";
import { approvedLeavesPath, cancelledLeavesPath, departmentPath, employeeLeavesListPath, employeeListPath, holidayPath, homePath, leaveReasonPath, leaveRequestPath, leaveTypePath, manageLeaverequestPath, pendingLeavesPath, rejectedLeavesPath, sidebarTabData } from "../../Util/Constants";
import { getData } from "../../Util/Helper";
import styles from "./Dashboard.module.scss";


function Dashboard() {

    const loginData = getData("loginData");

    const userName = loginData.data.user.employee.firstName + " " + loginData.data.user.employee.lastName;

    const userLoginData = loginData.data.user.lastLogin;


    return (
        <>
            <NavbarComponent user={userName} />
            <Sidebar user={userName} position={loginData.data.user.employee.designation} sidebarTabData={sidebarTabData} userImage={"./assets/images/profile.png"} />
            <div className={styles.maincontent}>
                <Routes>
                    <Route path={homePath} element={<ProfilePage />} />
                    <Route path={holidayPath} element={<h1>Holidays</h1>} />
                    <Route path={leaveRequestPath} element={<LeaveRequest logindate={userLoginData} />} />
                    <Route path={approvedLeavesPath} element={<ApprovedLeave logindate={userLoginData} />} />
                    <Route path={pendingLeavesPath} element={<PendingLeave logindate={userLoginData} />} />
                    <Route path={rejectedLeavesPath} element={<RejectedLeave logindate={userLoginData} />} />
                    <Route path={cancelledLeavesPath} element={<CancelledLeave logindate={userLoginData} />} />
                    <Route path={manageLeaverequestPath} element={<ManageLeaveRequest logindate={userLoginData} />} />
                    <Route path={employeeListPath} element={<h1>employeelist</h1>} />
                    <Route path={employeeLeavesListPath} element={<h1>employeeleaveslist</h1>} />
                    <Route path={leaveReasonPath} element={<h1>Leave Reason</h1>} />
                    <Route path={leaveTypePath} element={<h1>leavetype</h1>} />
                    <Route path={departmentPath} element={<h1>department</h1>} />
                </Routes>
            </div>
        </>
    )
}

export default Dashboard;
