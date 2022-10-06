import React from "react";
import { Route, Routes } from "react-router-dom";
import { NavbarComponent, Sidebar } from '../../stories'
import { LeaveRequest, ApprovedLeave } from "../../components";
import { sidebarTabData } from "../../Util/Constants";
import { useAuthContext } from "../../Hooks";
import { getData, removeData } from "../../Util";
import { callLogoutGet } from "../../APIs";
import * as styles from './Dashboard.module.scss'

function Dashboard() {

    // const { dispatch } = useAuthContext();
    // const loginData = getData("LoginData");
    // const logout = () => {
    //     removeData("LoginData");
    //     callLogoutGet({ headers: { Authorization: 'bearer ' + loginData.token } }).then((Response) =>
    //         alert(Response.data.message)
    //     );
    //     dispatch({ type: "LOGGED_OUT", loggedIn: false });
    // };.

    const loginData = getData("LoginData");

    const userName = loginData.data.user.employee.firstName + " " + loginData.data.user.employee.lastName;

    return (
        <>
            <NavbarComponent
                user={userName} />

            <Sidebar
                user={userName}
                position={loginData.data.user.employee.designation} sidebarTabData={sidebarTabData}
                userImage={"./assets/images/profile.png"} />

            <div className={styles.maincontent}>
                <Routes>
                    <Route path="/home" element={<h1>Home</h1>} />
                    <Route path="/holidays" element={<h1>Holidays</h1>} />
                    <Route path="/leaverequest" element={<LeaveRequest logindate={loginData.data.user.lastLogin} />} />
                    <Route path="/approvedleaves" element={<ApprovedLeave logindate={"10-12-2036"} />} />
                    <Route path="/manageleaverequest" element={<h1>manageleaverequest</h1>} />
                    <Route path="/employeelist" element={<h1>employeelist</h1>} />
                    <Route path="/employeeleaveslist" element={<h1>employeeleaveslist</h1>} />
                    <Route path="/leavetype" element={<h1>leavetype</h1>} />
                    <Route path="/department" element={<h1>department</h1>} />
                </Routes>
            </div>
        </>
    )
}

export default Dashboard
