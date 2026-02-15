import { useEffect, useState } from "react"
import Header from "../Components/Header/Header"
import Products from "../Components/Products/Products"
import UpperText from "../Components/UpperText/UpperText"
import axios from "axios"


const AllProduct = () => {
    const [products,setProducts]=useState([{}])
    const [reload,setReload]=useState(false)
    const heads=["#","Product Name","Price","Image","Action"]
    const btn={
      icon:"+",
      text:"Add Product",
      link:"/dashboard/add"
    }
    useEffect(()=>{
      axios.get("https://vica.website/api/items",{
        headers:{
          Authorization:localStorage.getItem("token"),
          "Accept":"application/json"
        }
      }).then(res=>{
        setProducts(res.data)
      })
    },[reload])
  return (
    <div >
    <Header place="Products"/>
    <UpperText text="Manage Products" btn={btn}/>
    <Products products={products} heads={heads} reload={setReload}/>
    </div>
  )
}

export default AllProduct
