import React from 'react'
import { TabStyle } from './SidebarTab.styled'

type proptype = {
    leave: boolean,
    onClick?: () => void
}

function SidebarTab({ leave, onClick }: proptype) {
    return (
        <TabStyle
            className="Rectangle-5-copy"
            leave={leave}
            onClick={onClick}>
            < div className="Layer-1" >
                <img src="./assets/home.svg" alt="" />
                <span className="Leaves">Leaves</span>
            </div >
            {leave && <div className="ic_remove_black_48dp-1">-</div>
            }
        </TabStyle >
    )
}

export default SidebarTab
