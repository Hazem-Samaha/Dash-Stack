import { useEffect, useState } from "react"
import Header from "../Components/Header/Header"
import UpperText from "../Components/UpperText/UpperText"
import FormProduct from "../Components/ProductForm/ProductForm"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"

const EditProduct = () => {
    const [data, setData] = useState({})
    const navigate = useNavigate()
    const params = useParams()
    
    const inputs = [
        {
            text: "Product Name",
            type: "text",
            placeholder: "Product Name",
            class: "text",
            value: data.name || "",
            name: "name",
        },
        {
            text: "Price",
            type: "number",
            placeholder: "Price",
            class: "price",
            value: data.price || "",
            name: "price"
        }
    ]

    useEffect(() => {
        axios.get(`https://vica.website/api/items/${params.id}`, {
            headers: {
                Authorization: localStorage.getItem("token"),
                "Accept": "application/json"
            }
        }).then(res => {
            setData(res.data)
        })
    }, [params.id])

    const handleSubmit = (formData) => {
    const submitData = new FormData()
        
        Object.keys(formData).forEach(key => {
            if (formData[key] !== undefined && formData[key] !== null) {
                submitData.append(key, formData[key])
            }
        })
        
        submitData.append("_method", "put")

        axios.post(`https://vica.website/api/items/${params.id}`, submitData, {
            headers: {
                Authorization: localStorage.getItem("token"),
                "Accept": "application/json",
                "Content-Type": "multipart/form-data"
            }
        }).then(res => navigate("/dashboard"))
          .catch(err => console.log(err))
    }

    return (
        <div>
            <Header place="Products/Edit" />
            <UpperText text="Edit Products" />
            <FormProduct 
                inputs={inputs} 
                submit="Save" 
                initialData={data}
                onSubmit={handleSubmit}
                image={data.image_url}
            />
        </div>
    )
}
export default EditProduct
