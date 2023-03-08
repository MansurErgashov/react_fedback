import "./feedbtn.scss"
import { Link } from "react-router-dom"

function Feedbtn(props) {

    return(
        (props.type)? (
            <button className="feedbtn" to={`/${props.link}/${props.id}`} type={props.type}>{props.content}</button>
        ):(
            <Link className={(props.isTrue)?(`feedbtn ${props.isTrue}`):("feedbtn")} to={`/${props.link}/${props.id}`}>{props.content}</Link> 
        )
    )
}
export default Feedbtn