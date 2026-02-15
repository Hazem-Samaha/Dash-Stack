import { Link } from "react-router-dom"
import "./SignForm.css"
import { IoCloudDownloadOutline } from "react-icons/io5"

const Form = ({ title, subtitle, TextInputs, EmailInput, PasswordInput, file, submit, text, link, textlink, register, changeData }) => {
    let data = {}
    const handleForm = (event) => {
        event.preventDefault()
        changeData(data)
        if (data.first_name && data.last_name) {
            changeData({ ...data, "user_name": data.first_name + "_" + data.last_name })
        }
    }
    return (
        <form className="form" onSubmit={(event) => handleForm(event)}>
            <div className="part">
                <h1>{title}</h1>
                <p className="subtitle">{subtitle}</p>

                {
                    TextInputs ? <div className="collection">
                        {TextInputs?.map((input, index) => {
                            return (<div key={index}>
                                <p className="label">{input.text}</p>
                                <input type={input.type} placeholder={input.placeholder}
                                    onChange={(event) => { data = { ...data, [input.name]: event.target.value } }} />
                            </div>
                            )
                        })}
                    </div> : ""
                }

                <div className="email">
                    <p className="label">{EmailInput.text}</p>
                    <input type={EmailInput.type} placeholder={EmailInput.placeholder}
                        onChange={(event) => { data = { ...data, [EmailInput.name]: event.target.value } }} />
                </div>
                {
                    register ? <div className={"collection"}>
                        {PasswordInput?.map((input, index) => {
                            return (<div key={index}>
                                <p className="label">{input.text}</p>
                                <input type={input.type} placeholder={input.placeholder}
                                    onChange={(event) => { data = { ...data, [input.name]: event.target.value } }} />
                            </div>
                            )
                        })}
                    </div> : <>{PasswordInput?.map((input, index) => {
                        return (<div key={index}>
                            <p className="label">{input.text}</p>
                            <input type={input.type} placeholder={input.placeholder}
                                onChange={(event) => { data = { ...data, [input.name]: event.target.value } }} />
                        </div>
                        )
                    })}</>
                }
                {file ? <div className="protofile">
                    <p className="label">{file}</p>
                    <label htmlFor="upload" className="file">
                        <p> <IoCloudDownloadOutline /></p>
                    </label>
                    <input type="file" id="upload" hidden
                        onChange={(event) => { data = { ...data, "profile_image": event.target.files[0] } }} />
                </div> : ""}
            </div>
            <div className="part">
                <input type="submit" className="submit" value={submit} />
                <p className="text">{text}<Link to={link}>{textlink}</Link></p>
            </div>
        </form>
    )
}

export default Form
