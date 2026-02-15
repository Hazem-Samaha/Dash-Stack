import { useState } from "react"
import NavBar from "../Components/NavBar/NavBar"
import { Outlet } from "react-router-dom"
import { TbClockHour4 } from "react-icons/tb"
import { HiMiniSquares2X2 } from "react-icons/hi2"
import { FaPowerOff } from "react-icons/fa"




const Dashboard = () => {
  const elements=[
    {
      text:"Dashboard",
      icon:<TbClockHour4 />,
    },    {
      text:"Products",
      icon:<HiMiniSquares2X2 />,
    }]
    
  return (
    <div style={{ display:"flex"}}>
      <NavBar bright="Dash" dark="Stack" elements={elements} icon={<FaPowerOff />} text="Logout" />
      <Outlet />
    </div>
  )
}

export default Dashboard
