import React from 'react'
import { PageTitle } from '../../stories'
import * as style from './LeaveRequest.module.scss'

function LeaveRequest() {
    return (
        <div >
            <PageTitle logindate='12-10-1989' pagename={'Leaves'} innerpage='Leave Request' />
            <div className={style.py30}>
                <div className={style.leaverequestform}>
                </div>
            </div>

        </div>
    )
}

export default LeaveRequest
