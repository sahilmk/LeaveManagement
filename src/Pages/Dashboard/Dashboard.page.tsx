import React from "react";
import { Route, Routes } from "react-router-dom";
import { NavbarComponent, Sidebar } from '../../stories'
import { departmentPath, employeeleaveslistPath, employeelistPath, holidayPath, homePath, leavetypePath, manageleaverequestPath, sidebarTabData } from '../../Util/Constants'
import styles from './Dashboard.module.scss'

function Dashboard() {
    return (
        <>
            <NavbarComponent />
            <Sidebar user='John Doe' position='Admin' sidebarTabData={sidebarTabData} userImage={""} />
            <div className={styles.maincontent}>
                <Routes>
                    <Route path={homePath} element={<h1>Home</h1>} />
                    <Route path={holidayPath} element={<h1>Holidays</h1>} />
                    <Route path={manageleaverequestPath} element={<h1>manageleaverequest</h1>} />
                    <Route path={employeelistPath} element={<h1>employeelist</h1>} />
                    <Route path={employeeleaveslistPath} element={<h1>employeeleaveslist</h1>} />
                    <Route path={leavetypePath} element={<h1>leavetype</h1>} />
                    <Route path={departmentPath} element={<h1>department</h1>} />
                </Routes>
            </div>
        </>
    )
}

export default Dashboard
