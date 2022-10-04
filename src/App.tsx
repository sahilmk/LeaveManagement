import React from "react"
import { Sidebar } from "./stories"
import { sidebarTabData } from './Util/Constants'

function App() {
  return (
    <div className="App">
      <Sidebar user='sahil' position='dev' sidebarTabData={sidebarTabData} userImage='./assets/images/profile.png' />
    </div>
  )
}

export default App
