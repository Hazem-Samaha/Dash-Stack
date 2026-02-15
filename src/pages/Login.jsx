import { useEffect, useState } from "react"
import Form from "../Components/SignForm/SignForm"
import { useNavigate } from "react-router-dom"
import axios from "axios"


const Login = () => {
  const [data,setData]=useState({})
  let user={}
  const navigate=useNavigate()
  useEffect(()=>{
if(data.email){
      axios.post("https://vica.website/api/task-login",data,{
      headers:{
        "Accept":"application/json",
        "Content-Type":"multipart/form-data"
      }
    }).then(res=>{
      localStorage.setItem("user",JSON.stringify(res.data.user))
      localStorage.setItem("token",`Bearer ${res.data.token}`)
      navigate("/dashboard")
    })
    .catch(err=>console.log(err))
}
  },[data])
const EmailInput={
      text:"Email",
      type:"email",
      placeholder:"Email",
      class:"email",
      name:"email",
    }
const Password=[{
      text:"Password",
      type:"password",
      placeholder:"********",
      class:"password",
      name:"password",
    }]
  return (
    <div>
      <Form title="Sign In" subtitle="Please enter your email and password to continue"
      PasswordInput={Password} EmailInput={EmailInput} submit="Sign In" 
      text="Don’t have an accoun" link="/register" textlink="Sign Up" changeData={setData}/>
    </div>

  )
}

export default Login
