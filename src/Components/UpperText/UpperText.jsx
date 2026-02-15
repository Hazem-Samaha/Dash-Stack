import { Link } from "react-router-dom"
import "./UpperText.css"

const UpperText = ({text,btn}) => {
  return (
    <div className="upper">
      <p className="title">{text}</p>
      {btn?<Link className="btn" to={btn.link}><p>{btn.icon}</p><p>{btn.text}</p></Link>:""}
    </div>
  )
}

export default UpperText
