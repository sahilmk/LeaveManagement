import React from 'react'
import { NavbarComponent, Sidebar } from '../../stories'

function Dashboard() {
    return (
        <>
            <NavbarComponent />
            <Sidebar user='John Doe' position='Admin' />
        </>
    )
}

export default Dashboard
