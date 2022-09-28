import React from 'react'
import { TabStyle } from './SidebarTab.styled'
import '../../Icons/css/material-design-iconic-font.css'

type SidebarProps = {
    leave: boolean,
    icon: string,
    dropdown: boolean,
    onClick?: () => void
}

function SidebarTab({ leave, onClick, icon, dropdown }: SidebarProps) {

    return (
        <TabStyle
            className="Rectangle-5-copy"
            leave={leave}
            onClick={onClick}>
            < div className="Layer-1" >
                <i className={`zmdi zmdi-${icon}`} />
                <span className="Leaves">Leaves</span>
            </div >
            {leave && (dropdown ? <div className="ic_remove_black_48dp-1">-</div> : <div className="ic_remove_black_48dp-1">+</div>)}
        </TabStyle >
    )
}

export default SidebarTab
