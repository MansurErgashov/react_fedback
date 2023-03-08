import "./addComment.scss"
import Feedbtn from "../../components/feedbtn/feedbtn"
// import { useParams } from "react-router-dom"

const AddComment = ({param, current, setCount}) => {

    const commentAdd = (e) => {
        e.preventDefault();
        const date = new Date();
        const addFormData = new FormData(e.target)
        const addFormObj =  {
            id: date,
            user: {
                image: "https://raw.githubusercontent.com/mukhammadyn/product-images/main/user-images/image-elijah.jpg",
                name: "Elijah Moss",
                username: "hexagon.bestagon",
            }
        }
        addFormData.forEach((value, key) => (addFormObj[key] = value))
        fetch(`http://localhost:3001/productRequests/${param.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                comments: [...current.comments, addFormObj]
            })

        })
        setCount((todos) => [...todos, addFormObj])
        e.target.reset();
        console.log(addFormObj);
    }
    return (
        <>
            <div className="add-comment">
                <h3 className="add-comment__heading">Add Comment</h3>
                <form className="add-comment__form" onSubmit={commentAdd}>
                    <textarea className="add-comment__input" type={"text"} name={"content"} placeholder={"Type your comment here"} rows={"3"}></textarea>
                    <div className="add-comment__wrap">
                        <p className="add-comment__count">250 Characters left</p>
                        <Feedbtn content={'Post Comment'} type="submit"/>
                    </div>
                </form>
            </div>
        </>
    )
}
export default AddComment