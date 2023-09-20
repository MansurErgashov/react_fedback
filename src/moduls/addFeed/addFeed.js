import "./addFeed.scss"
import plusImg from "../../assets/img/plus.png"
import Feedbtn from "../../components/feedbtn/feedbtn"
import { Link, useNavigate } from "react-router-dom"
import goBack from "../../assets/img/back-icon.svg"
import { TodosContext } from "../../App"
import { useContext } from "react"
// import { useRef } from "react"
// import { useEffect } from "react"
// import { Navigate } from "react-router-dom"


const AddFeed = ({count, setCount}) => {
    const {setTodos} = useContext(TodosContext)

    // const form = useRef(null)
    const navigate = useNavigate()
    const submit = (e) => {
        e.preventDefault();
        const myFormData = new FormData(e.target);
        const formDataObj = {
            upvotes: 0,
            isUpvoted: false,
            status: "suggestion",
            comments: [],
        };
        myFormData.forEach((value, key) => (formDataObj[key] = value));

            fetch("http://localhost:3001/productRequests", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(formDataObj)
            })
            setTodos((todos) => [...todos, formDataObj])
            e.target.reset();
            navigate("/")

}
    return (
        <div className="post-feed">
           <div className="feed-go">
                <Link className="go__back" to={"/"}>
                   <img className="go__back-img" src={goBack} alt="goBack" width={16} height={8} />
                   Go Back
                </Link>
            </div>
            <div className="feed-wrapp">
                <div className="feed__plus">
                    <img className="feed__plus-img" src={plusImg} alt="plusImg" width={16} height={16}/> 
                </div>

                <h3 className="feed__heading">Create New Feedback</h3>

                <form className="feed__form" onSubmit={submit}>
                    <label className="feed__label">
                        Feedback Title
                        <p className="feed__label-text">Add a short, descriptive headline</p>
                        <input className="feed__input" name="title"/>
                    </label>
                    <label className="feed__label">
                        Category
                        <p className="feed__label-text">Choose a category for your feedback</p>
                        <select className="feed__label-select" name="category">
                            <option className="feed__option" value={"UI"}>UI</option>
                            <option className="feed__option" value={"UX"}>UX</option>
                            <option className="feed__option" value={"enhancement"}>enhancement</option>
                            <option className="feed__option" value={"bug"}>bug</option>
                            <option className="feed__option" value={"Feature"}>Feature</option>
                        </select>
                    </label>
                    <label className="feed__label">
                        Feedback Title
                        <p className="feed__label-text">Add a short, descriptive headline</p>
                        <textarea className="feed__label-textarea" rows={"5"} name={"description"}></textarea>
                    </label>

                    <div className="feed__form-btns">
                        <Feedbtn  content="cancel" isTrue={"black"}/>
                        <Feedbtn  content="Add feedback" type="submit"/>
                    </div>
                </form>

            </div>
        </div>
    )
}
export default AddFeed