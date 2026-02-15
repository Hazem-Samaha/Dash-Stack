
import "./ProductForm.css"
import { useState, useEffect } from "react"

const FormProduct = ({ inputs, submit, initialData, onSubmit, image }) => {
    const [formData, setFormData] = useState({
        name: initialData.name || "",
        price: initialData.price || "",
        image: null
    })
    const [previewImage, setPreviewImage] = useState(image || null)
    useEffect(() => {
        if (initialData) {
            setFormData(prev => ({
                ...prev,
                name: initialData.name || "",
                price: initialData.price || ""
            }))
        }
        if (image) {
            setPreviewImage(image)
        }
    }, [initialData, image])


    const handleInputChange = (event) => {
        const { name, value } = event.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleFileChange = (event) => {
        const file = event.target.files[0]
        if (file) {
            setFormData(prev => ({
                ...prev,
                image: file
            }))

            const reader = new FileReader()
            reader.onloadend = () => {
                setPreviewImage(reader.result)
            }
            reader.readAsDataURL(file)
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const dataToSend = { ...formData }

        if (!dataToSend.image) {
            delete dataToSend.image
        }
        onSubmit(dataToSend)
    }

    return (
        <div className="FormProduct">
            <form onSubmit={handleSubmit}>
                {inputs?.map((input, index) => {
                    return (
                        <div key={index}>
                            <p>{input.text}</p>
                            <input
                                placeholder={input.placeholder}
                                type={input.type}
                                name={input.name}
                                value={formData[input.name] || ""}
                                onChange={handleInputChange}
                            />
                        </div>
                    )
                })}

                <input
                    type="file"
                    id="upload"
                    hidden
                    onChange={handleFileChange}
                    accept="image/*"
                />

                <input type="submit" className="submit" value={submit} />
            </form>

            <div className="productfile">
                <label htmlFor="upload" className="file">
                    {previewImage ? (
                        <img src={previewImage} alt="Product preview" />
                    ) : <svg width="124" height="113" viewBox="0 0 124 113" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M82.6268 10.9119C83.441 10.9122 84.0878 11.6072 84.0878 12.4461C84.0876 13.2848 83.4409 13.9791 82.6268 13.9793C75.209 13.9793 68.5436 19.212 66.4266 26.7147C66.2099 27.4861 65.4587 27.9516 64.7069 27.7733L64.703 27.7791L64.6063 27.7489C63.8293 27.5044 63.3975 26.6491 63.6249 25.8446C66.0526 17.2394 73.6169 10.9119 82.6268 10.9119Z" fill="#4880FF" stroke="#F9FFF9" stroke-width="0.3" />
                        <path d="M100.986 80.231H93.1176C92.3934 80.231 91.806 79.6114 91.806 78.8476C91.806 78.0838 92.3934 77.4642 93.1176 77.4642H100.986C111.833 77.4642 120.659 68.1551 120.659 56.7139C120.659 45.2726 111.833 35.9636 100.986 35.9636H100.797C100.417 35.9636 100.055 35.7897 99.8061 35.4863C99.5569 35.183 99.4445 34.7808 99.4989 34.3836C99.616 33.5219 99.675 32.6564 99.675 31.8135C99.675 21.8979 92.026 13.8298 82.6254 13.8298C78.9681 13.8298 75.4805 15.0353 72.5389 17.3168C71.8925 17.8178 70.9744 17.5955 70.6007 16.8455C62.2699 0.112863 40.5107 -2.13416 29.2297 12.4218C24.4774 18.5539 22.6102 26.5309 24.1064 34.3056C24.2713 35.1642 23.6483 35.9646 22.8212 35.9646H22.2956C11.4487 35.9646 2.62313 45.2737 2.62313 56.715C2.62313 68.1562 11.4487 77.4653 22.2956 77.4653H30.1645C30.8887 77.4653 31.476 78.0848 31.476 78.8486C31.476 79.6124 30.8887 80.232 30.1645 80.232H22.2956C10.0021 80.232 0 69.6819 0 56.7149C0 44.1115 9.44835 33.7916 21.2661 33.2225C20.156 25.1564 22.2788 17.0203 27.1987 10.6708C39.2766 -4.91461 62.4231 -3.16769 72.2077 14.2112C75.3292 12.147 78.901 11.0642 82.6249 11.0642C94.0144 11.0642 103.039 21.2892 102.25 33.2354C113.959 33.928 123.282 44.1935 123.282 56.7138C123.282 69.6819 113.279 80.231 100.986 80.231L100.986 80.231Z" fill="#4880FF" />
                        <path d="M61.4655 43.3316C79.6349 43.3317 94.4028 58.9211 94.403 78.066C94.403 97.2108 79.635 112.8 61.4655 112.8C43.296 112.8 28.527 97.2111 28.527 78.066C28.5271 58.9213 43.2959 43.3316 61.4655 43.3316ZM61.4655 46.399C44.9233 46.399 31.451 60.5978 31.4508 78.066C31.4508 95.5346 44.9234 109.733 61.4655 109.733C78.0074 109.733 91.4791 95.5343 91.4791 78.066C91.479 60.5976 78.0073 46.3991 61.4655 46.399Z" fill="#4880FF" stroke="#F9FFF9" stroke-width="0.3" />
                        <path d="M62.0641 64.4932C62.6845 64.4932 63.1744 65.0219 63.1744 65.6563V91.9883C63.1744 92.6235 62.6845 93.1514 62.0641 93.1514C61.4438 93.1513 60.9537 92.6227 60.9537 91.9883V65.6563C60.9538 65.022 61.4438 64.4934 62.0641 64.4932Z" fill="#4880FF" stroke="#4880FF" stroke-width="0.3" />
                        <path d="M61.276 64.8391C61.7097 64.3809 62.418 64.3811 62.8522 64.8391L70.5328 72.9417C70.9628 73.3951 70.9626 74.1258 70.5328 74.5794L70.5338 74.5803C70.3178 74.809 70.0316 74.924 69.7457 74.9241C69.4595 74.9241 69.1735 74.8079 68.9576 74.5803L62.0641 67.3088L55.1705 74.5803C54.7369 75.0383 54.0295 75.0381 53.5953 74.5803C53.1653 74.1268 53.1653 73.3952 53.5953 72.9417L61.276 64.8391Z" fill="#4880FF" stroke="#4880FF" stroke-width="0.3" />
                    </svg>}
                </label>
            </div>
        </div>
    )
}

export default FormProduct
