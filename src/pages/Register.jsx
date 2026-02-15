import { useEffect, useState } from "react"
import Form from "../Components/SignForm/SignForm"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Register = () => {
  const [data,setData]=useState({})
  const navigate=useNavigate()
  useEffect(()=>{
if(data.email){
      axios.post("https://vica.website/api/register",data,{
      headers:{
        "Accept":"application/json",
        "Content-Type":"multipart/form-data"
      }
    }).then(res=>{
      localStorage.setItem("user",JSON.stringify(res.data.data.user))
      localStorage.setItem("token",`Bearer ${res.data.data.token}`)
      navigate("/dashboard")
    })
    .catch(err=>console.log(err))
}
  },[data])
    const TextInputs=[
    {
      text:"First Name",
      type:"text",
      placeholder:"First Name",
      class:"text",
      name:"first_name",
    },
      {
      text:"Last Name",
      type:"text",
      placeholder:"Last Name",
      class:"text",
      name:"last_name"
    }]
const EmailInput={
      text:"Email",
      type:"email",
      placeholder:"Email",
      class:"email",
      name:"email",
    }
const Password=[{
      text:"password",
      type:"password",
      placeholder:"********",
      class:"password",
      name:"password"
    },
        {
      text:"confirm",
      type:"password",
      placeholder:"********",
      class:"password",
      name:"password_confirmation",
    }]
  return (
    <div>
      <Form title="Sign Up" subtitle="Create a account to continue" TextInputs={TextInputs}
      PasswordInput={Password} EmailInput={EmailInput} file="Profile Image" text="Already have an account?"
      textlink="Sign In" link="/login" register={true} changeData={setData}/>
    </div>
  )
}

export default Register
