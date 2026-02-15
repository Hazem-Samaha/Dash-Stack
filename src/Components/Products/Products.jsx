import { FiEdit } from "react-icons/fi"
import "./Products.css"
import { RiDeleteBin6Line } from "react-icons/ri"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
import axios from "axios"

const Products = ({products,heads,reload}) => {
    const MySwal = withReactContent(Swal);
    const navigate=useNavigate()
    const EditProduct=(id)=>{
        navigate(`/dashboard/edit/${id}`)
    }
      const handleDelete = (id) => {
    MySwal.fire({
      title: "Are you sure you want to delete the product?",
      showCancelButton: true,
      confirmButtonColor:"#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText:"Yes",
      cancelButtonText: "No"
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`https://vica.website/api/items/${id}`,{
        headers:{
          Authorization:localStorage.getItem("token"),
          "Accept":"application/json"
        }
      }).then(res=>reload(prev=>!prev))
      .catch(err=>console.log(err))
        
      }
    })
  }
  return (
    <div className="products">
        <table>
            <thead>
                <tr>
                    {heads?.map((head,index)=>{
                        return <th key={index}>{head}</th>
                    })}
                </tr>
            </thead>
            <tbody>
                {products?.map((product)=>{
                    return( <tr key={product.id}>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>${product.price}</td>
        <td><img src={product.image_url}/></td>
        <td ><div className="action"><p className="edit" onClick={()=>EditProduct(product.id)}><FiEdit /></p>
        <p className="delete" onClick={()=>handleDelete(product.id)}><RiDeleteBin6Line /></p></div></td>
                    </tr>)
                })}
            </tbody>
        </table>
    </div>
  )
}

export default Products
