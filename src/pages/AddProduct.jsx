import { useState } from "react"
import FormProduct from "../Components/ProductForm/ProductForm"
import Header from "../Components/Header/Header"
import UpperText from "../Components/UpperText/UpperText"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const AddProduct = () => {
    const navigate = useNavigate()
    
    const inputs = [
        {
            text: "Product Name",
            type: "text",
            placeholder: "Product Name",
            class: "text",
            name: "name",
        },
        {
            text: "Price",
            type: "number",
            placeholder: "Price",
            class: "price",
            name: "price"
        }
    ]

    const handleSubmit = (formData) => {
    const submitData = new FormData()
        
        Object.keys(formData).forEach(key => {
            if (formData[key] !== undefined && formData[key] !== null) {
                submitData.append(key, formData[key])
            }
        })

        axios.post("https://vica.website/api/items", submitData, {
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
            <Header place="Products/Add"/>
            <UpperText text="Add Products" />
            <FormProduct 
                inputs={inputs} 
                submit="Save" 
                initialData={{}}
                onSubmit={handleSubmit}
            />
        </div>
    )
}

export default AddProduct
