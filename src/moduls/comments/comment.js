import "./comment.scss"
import People from "../../assets/img/people-img.svg"
import { Link } from "react-router-dom"

const Comment = (props) => {
    return (
        <li className="comment">
            <img className="comment__img" src={People} alt="People" width={40} height={40}/>
            <div className="comment__wrapper">
                <div className="comment__wrapper-author">
                    <div className="comment__author-person">
                        <h3 className="comment__person-name">{props.commentName}</h3>
                        <p className="comment__person-email">{props.commentUsername}</p>
                    </div>
                    <Link className="comment__author-reply" to={"reply"}>Reply</Link>
                </div>
                <p className="comment__wrapper-text">{props.content}</p>
            </div>
        </li>
    )
}
export default Comment