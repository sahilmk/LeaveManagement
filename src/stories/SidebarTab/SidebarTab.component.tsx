import React from 'react'
import { TabStyle } from './SidebarTab.styled'
import '../../Icons/css/material-design-iconic-font.css'

type SidebarProps = {
    isExpandable: boolean,
    icon?: string,
    isOpen?: boolean,
    label: string,
    path?: string
    onClick?: (e?: undefined | React.MouseEvent<HTMLElement>) => void
}

function SidebarTab({ isExpandable, onClick, icon, isOpen, label, path }: SidebarProps) {

    return (
        <TabStyle
            className="Rectangle-5-copy"
            onClick={onClick}
        >
            < div className="Layer-1" >
                <i className={`zmdi zmdi-${icon}`} />
                <span className="Leaves">{label}</span>
            </div >
            {isExpandable && (isOpen ? <div className="ic_remove_black_48dp-1">-</div> : <div className="ic_remove_black_48dp-1">+</div>)}
        </TabStyle >
    )
}

export default SidebarTab
