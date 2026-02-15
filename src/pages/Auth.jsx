import { Outlet } from "react-router-dom"
import Background from "../Components/Background/Background"
import Login from "./Login"


const Auth = () => {
  return (
    <div>
      <Background />
      <Login/>
      <Outlet />
    </div>
  )
}

export default Auth
