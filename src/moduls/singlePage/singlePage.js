import "./singlePage.scss"
import { useParams } from "react-router-dom"
import Category from "../../components/category/category"
import { Link } from "react-router-dom"
import goBack from '../../assets/img/back-icon.svg'
import Feedbtn from "../../components/feedbtn/feedbtn"
import Comment from "../comments/comment"
import AddComment from "../addComment/addComment"
import { useContext } from "react"
import { TodosContext } from "../../App"


const SinglePage = ({count,setCount}) => {
    const {todos, setTodos} = useContext(TodosContext)
    const param = useParams()
    // prop.setParamId(param.id)
    const current = todos.find(todo => todo.id == param.id)

    return (
        <>
        <div className="detail__wrapper">
            <div className="go">
                <Link className="go__back" to={"/"}>
                   <img className="go__back-img" src={goBack} alt="goBack" width={16} height={8} />
                   Go Back
                </Link>
                <Feedbtn link="edit" content="Edit Feedback" isTrue={"blue"} id={param.id}/>
            </div>
            <Category
              key = {current.id}
              id = {current.id}
              message = {current.upvotes}
              sarlavha = {current.title}
              isCount = {current.isUpvoted}
              paragraph = {current.description}
              category = {current.category}
              comment = {(current.comments && current.comments.length) ? (current.comments.length):('0')}  
            />
            {
                (current.comments && current.comments.length) ? (
                    <div className="wrapper">
                    <div className="single">
                        <h2 className="single__comment">{current.comments.length} Comments</h2>
                        <ul className="single__list">
                            { current.comments && current.comments.map(data => 
        
                            <Comment 
                            key = {data.id}
                            content = {data.content}
                            commentName = {data.user.name}
                            commentUsername = {data.user.username}
                            />
                            )}
                        </ul>
                    </div>
                    <AddComment count={count} param = {param} current= {current} setCount = {setCount}/>
                    </div>
                ):(
                    <AddComment count={count} param = {param} current= {current} setCount = {setCount}/>
                )
            }
        </div>
        </>
    )
}
export default SinglePage