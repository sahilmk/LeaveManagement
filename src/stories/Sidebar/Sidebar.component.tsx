import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import ButtonComponent from '../ButtonComponent'
import SidebarTab from '../SidebarTab'
import { SidebarStyle } from './Sidebar.styled'

const sidebarTabData = [
    { icon: 'home', label: 'Home', isExpandable: false, isOpen: false, route: '/home' },
    { icon: 'local-florist', label: 'Holidays', isExpandable: false, isOpen: false, route: '/holidays' },
    { icon: 'blur', label: 'Leaves', isExpandable: true, isOpen: false, route: '/leaverequest' },
    { icon: 'chart', label: 'Manage Leave Request', isExpandable: false, isOpen: false, route: '/manageleaverequest' },
    { icon: 'accounts', label: 'Employee List', isExpandable: false, isOpen: false, route: '/employeelist' },
    { icon: 'blur-linear', label: 'Employee Leaves List', isExpandable: false, isOpen: false, route: '/employeeleaveslist' },
    { icon: 'format-quote', label: 'Leave Reason', isExpandable: false, isOpen: false, route: '/leavereason' },
    { icon: 'device-hub', label: 'Leave Type', isExpandable: false, isOpen: false, route: '/leavetype' },
    { icon: 'gamepad', label: 'Department', isExpandable: false, isOpen: false, route: '/department' }
]

const sidebarInnerTabData = [
    { label: 'Leave Request', route: '/leaverequest' },
    { label: 'Approved Leaves', route: '/approvedleaves' },
    { label: 'Pending Leaves', route: '/pendingleaves' },
    { label: 'Rejected Leaves', route: '/rejectedleaves' },
    { label: 'Cancelled Leaves', route: '/cancelledleaves' }];

function Sidebar({ user, position }: {
    user: string,
    position: string
}) {

    const [sidebarTabs, setSidebarTabs] = useState(sidebarTabData);
    const navigate = useNavigate();

    const openDropDown = (tab: { icon?: string, label: string, isExpandable?: boolean, isOpen?: boolean, route?: string }) => {
        if (tab.route) {
            navigate(tab.route)
        }

        if (tab.label === 'Leaves') {
            const newSidebarTabs = sidebarTabs.map((item) => {
                if (item.label === tab.label && item.isExpandable) {
                    return { ...item, isOpen: !item.isOpen };
                }
                return item;
            })
            setSidebarTabs(newSidebarTabs)
        }
    }

    useEffect(() => {

    }, [sidebarTabs]);

    return (
        <SidebarStyle>
            <div className="profile">
                <div className="profilepicture">
                    <img src="./assets/images/profile.png" alt={user} />
                </div>
                <div className="profiledescription">
                    <span>{user}</span>
                    <span className='userposition'>{position}</span>
                </div>
            </div>

            <ul>
                {sidebarTabs.map((tab) => (
                    <li key={tab.label}>

                        <SidebarTab
                            isExpandable={tab.isExpandable}
                            icon={tab.icon}
                            isOpen={tab.isOpen}
                            label={tab.label}
                            path={tab.route}
                            onClick={() => openDropDown(tab)} />



                        {(tab.isExpandable && tab.isOpen) &&
                            <ul>
                                {sidebarInnerTabData.map(tabs =>
                                    <li className='innerTabs' key={tabs.label}>
                                        <SidebarTab
                                            isExpandable={false}
                                            label={tabs.label}
                                            path={tabs.route}
                                            onClick={() => openDropDown(tabs)} />
                                    </li>)}
                            </ul>
                        }

                    </li>
                ))}
            </ul>

            <ButtonComponent label={` Logout`} borderRadius={false} color='#fff' logo={true} />

        </SidebarStyle>
    )
}

export default Sidebar
