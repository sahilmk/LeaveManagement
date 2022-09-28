import React from 'react'
import ButtonComponent from '../ButtonComponent'
import SidebarTab from '../Sidebar tab'
import { SidebarStyle } from './Sidebar.styled'

type sidebarProp = {
    user: string,
    position: string,
}

const uilist = [
    { icon: 'home', label: 'Home' },
    { icon: 'local-florist', label: 'Holidays' },
    { icon: 'blur', label: 'Leaves' },
    { icon: 'chart', label: 'Manage Leave Request' },
    { icon: 'accounts', label: 'Employee List' },
    { icon: 'blur-linear', label: 'Employee Leaves List' },
    { icon: 'format-quote', label: 'Leave Reason' },
    { icon: 'device-hub', label: 'Leave Type' },
    { icon: 'gamepad', label: 'Department' }
]

function Sidebar({ user, position }: sidebarProp) {
    return (
        <SidebarStyle className='sidebar'>
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
                {uilist.map((tab) =>
                    <li key={tab.label}>
                        <SidebarTab leave={tab.label === 'Leaves'} icon={tab.icon} dropdown={false} label={tab.label} />
                    </li>
                )}
            </ul>

            <ButtonComponent label={` Logout`} borderRadius={false} color='#fff' logo={true} />
        </SidebarStyle>
    )
}

export default Sidebar
