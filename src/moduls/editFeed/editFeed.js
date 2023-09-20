import "./editFeed.scss"
import Edit from "../../assets/img/edit.png"
import Feedbtn from "../../components/feedbtn/feedbtn"
import goBack from "../../assets/img/back-icon.svg"
import { Link, useParams } from "react-router-dom"
import { useContext } from "react"
import { TodosContext } from "../../App"
// import Header from "../../components/header/header"

const EditFeed = () => {
    const {todos, setTodos} = useContext(TodosContext)
    
    const paramId = useParams();

    const current = todos.find(todo => todo.id == paramId.id)

    return (
        <div className="edit-wrapper">
        <div className="feed-go">
            <Link className="go__back" to={"/"}>
                <img className="go__back-img" src={goBack} alt="goBack" width={16} height={8} />
                Go Back
            </Link>
        </div>
        <div className="edit">
            <div className="edit__imgWrap">
                <img className="edit__img" src={Edit} alt={"edit-img"} width={23} height={24}/>
            </div>
            <h2 className="edit__heading">Editing ‘Add a dark theme option’</h2>
            <form className="edit__form" >

                <label className="edit__form-label">
                    Feedback Title
                    <p className="edit__form-text">Add a short, descriptive headline</p>
                    <input className="edit__form-title" type={"text"} name={"title"}  placeholder={current.title}/>
                </label>

                <label className="edit__form-label">
                    Category
                    <p className="edit__form-text">Choose a category for your feedback</p>
                    <select className="edit__form-select" name="category">
                        <option className="edit__form-option" disabled value={current.category}>{current.category}</option>
                        <option className="edit__form-option" value={"UI"}>UI</option>
                        <option className="edit__form-option" value={"UX"}>UX</option>
                        <option className="edit__form-option" value={"enhancement"}>enhancement</option>
                        <option className="edit__form-option" value={"bug"}>bug</option>
                        <option className="edit__form-option" value={"feature"}>feature</option>
                    </select>
                </label>

                <label className="edit__form-label">
                    Update Status
                    <p className="edit__form-text">Change feedback state</p>
                    <select className="edit__form-select" name='status'>
                        <option className="edit__form-option" value={current.status} disabled>{current.status}</option>
                        <option className="edit__form-option" value={"suggestion"}>suggestion</option>
                        <option className="edit__form-option" value={"planned"}>planned</option>
                        <option className="edit__form-option" value={"in-progress"}>in-progress</option>
                        <option className="edit__form-option" value={"live"}>live</option>
                    </select>
                </label>

                <label className="edit__form-label">
                    Feedback Detail
                    <p className="edit__form-text">Include any specific comments on what should be improved, added, etc.</p>
                    <textarea className="edit__form-detail" rows={"4"} name={"description"} placeholder={current.description}></textarea>
                </label>

                <div className="edit__form-btns">
                    <Feedbtn content="Delete" isTrue={"red"}/>
                    <div className="edit__btn-wrap">
                        <Feedbtn  content="cancel" isTrue={"black"}/>
                        <Feedbtn  content="Add feedback" type="submit"/>
                    </div>
                </div>
            </form>
        </div>
        </div>
    )
}
export default EditFeed