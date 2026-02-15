import { useNavigate } from "react-router-dom"
import "./NavBar.css"
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import axios from "axios";
import { MdMenu } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";

const NavBar = ({bright,dark,elements,icon,text }) => {
  const MySwal = withReactContent(Swal)
    const [visible,setVisible]=useState(false)
  const navigate=useNavigate()
  const shownav=()=>{
    setVisible(prev=>!prev) 
  }
      const logout = () => {
    MySwal.fire({
      title: "Are you sure you want to Logout?",
      showCancelButton: true,
      confirmButtonColor:"#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText:"Yes",
      cancelButtonText: "No"
    }).then((result) => {
      if (result.isConfirmed) {
        axios.post(`https://vica.website/api/logout`,null,{
        headers:{
          Authorization:localStorage.getItem("token"),
          "Accept":"application/json"
        }
      }).then(res=>{
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        navigate("/")
      })
      .catch(err=>console.log(err))
    
        
      }
    })
  }
  return (
    <>
    <nav className="navheader" >
        <div >
        <h1><span>{bright}</span>{dark}</h1>
        <ul>
            {elements?.map((element,index)=>{
                return <li key={index} className={element.text=="Products"?"active":""}><p>{element.icon}</p>{element.text}</li>
            })}
        </ul>
        </div>
        <div className="logout" onClick={logout}>
            <p>{icon}</p>
            <button>{text}</button>
        </div>

    </nav>
        <ul className={visible?'shownav':'display'}>
          <p onClick={shownav} className={visible?'showbtn':'display'}><IoCloseSharp /></p>
            {elements?.map((element,index)=>{
                return <li key={index} className={element.text=="Products"?"active":""}><p>{element.icon}</p>{element.text}</li>
            })}
                  <li className="logout" onClick={logout}>
            <p>{icon}</p>
            <p>{text}</p></li>
        </ul>
<p onClick={shownav} className={!visible?'showbtn':'display'}><MdMenu /></p>

</>
  )
}

export default NavBar
