import React from "react";
import { Route, Routes } from "react-router-dom";
import { NavbarComponent, Sidebar } from '../../stories'
import { LeaveRequest } from "../../components";
import { sidebarTabData } from '../../Util/Constants'
import * as styles from './Dashboard.module.scss'

function Dashboard() {
    return (
        <>
            <NavbarComponent />
            <Sidebar user='John Doe' position='Admin' sidebarTabData={sidebarTabData} userImage={"./assets/images/profile.png"} />
            <div className={styles.maincontent}>
                <Routes>
                    <Route path="/home" element={<h1>Home</h1>} />
                    <Route path="/holidays" element={<h1>Holidays</h1>} />
                    <Route path="leaverequest" element={<LeaveRequest logindate={"10-10-2020"} />} />
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
