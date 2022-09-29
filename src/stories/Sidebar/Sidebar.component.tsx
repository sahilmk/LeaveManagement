import React from 'react'
import { useState } from 'react'
import ButtonComponent from '../ButtonComponent'
import SidebarTab from '../Sidebar tab'
import { SidebarStyle } from './Sidebar.styled'

const sidebarTabs = [
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

const innerSidebarTab = ['Leave Request', 'Approved Leaves', 'Pending Leaves', 'Rejected Leaves', 'Cancelled Leaves']

function Sidebar({ user, position }: {
    user: string,
    position: string
}) {
    const [showInnerList, setShowInnerList] = useState(false)

    const handleClick = (clickedTab: string | null) => {
        clickedTab === 'Leaves' && setShowInnerList(!showInnerList)
    }

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
                {sidebarTabs.map((tab) =>
                    <li key={tab.label}>

                        <SidebarTab leave={tab.label === 'Leaves'} icon={tab.icon} dropdown={showInnerList} label={tab.label} onClick={(e) => { handleClick((e?.target as HTMLInputElement).textContent) }} />

                        {(tab.label === 'Leaves' && showInnerList) &&
                            <ul>
                                {innerSidebarTab.map(tabs =>
                                    <li className='innerTabs' key={tabs}>
                                        <SidebarTab leave={false} label={tabs} />
                                    </li>)}
                            </ul>
                        }

                    </li>
                )}
            </ul>

            <ButtonComponent label={` Logout`} borderRadius={false} color='#fff' logo={true} />

        </SidebarStyle>
    )
}

export default Sidebar
