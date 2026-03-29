import { Outlet } from "react-router-dom"
import Background from "../Components/Background/Background"

const Auth = () => {
  return (
    <div>
      <Background />
      <Outlet />
    </div>
  )
}

export default Auth
