import React, { useContext } from "react"
import "./view.scss"
import goBack from '../../assets/img/back-icon.svg'
import { Link } from "react-router-dom"
import Feedbtn from "../../components/feedbtn/feedbtn"
import ViewItem from "../viewItem/viewItem"
import { TodosContext } from "../../App"

const View = () => {
    const {todos, setTodos} = useContext(TodosContext)
    let planned = 0
    let progress = 0
    let live = 0
    let suggestion = 0
    todos.forEach(item  => {(item.status == "planned") && (planned += 1)})
    todos.forEach(item  => {(item.status == "in-progress") && (progress += 1)})
    todos.forEach(item  => {(item.status == "live") && (live += 1)})
    todos.forEach(item  => {(item.status == "suggestion") && (suggestion += 1)})

    return (
        <>
        <div className="view">

            <div className="view__header">
                <div className="view__header-content">
                    <Link className="go__back go__back--white" to={"/"}>
                       <img className="go__back-img" src={goBack} alt="goBack" width={16} height={8} />
                       Go Back
                    </Link>
                    <h3 className="view__header-heading">Roadmap</h3>
                </div>
                <Feedbtn link="add" content="+ Add Feedback"/>
            </div>

                <div className="view__listWrapper">
                    <ul className="view__list">
                        <li className="view__list-itemBg">
                            <h3 className="view__itemBg-heading">Planned {`(${planned})`}</h3>
                            <p className="view__itemBg-text">Ideas prioritized for research</p>
                        </li>
                        { todos.map(todo =>
                        (todo.status == "planned") &&
                            (
                            <ViewItem 
                            key = {todo.id}
                            id = {todo.id}
                            title = {todo.title}
                            category = {todo.category}
                            upvotes = {todo.upvotes}
                            isUpvoted = {todo.isUpvoted}
                            status = {todo.status}
                            description = {todo.description}
                            commentCount = {(todo.comments)? (todo.comments.length):(0)}
                            setclass = {"planned"}
                            />
                            )
                        )}
                    </ul>
                    <ul className="view__list">
                        <li className="view__list-itemBg">
                            <h3 className="view__itemBg-heading">in-progress {`(${progress})`}</h3>
                            <p className="view__itemBg-text">Ideas prioritized for research</p>
                        </li>
                        { todos.map(todo =>
                        (todo.status == "in-progress") &&
                            (
                            <ViewItem 
                            key = {todo.id}
                            id = {todo.id}
                            title = {todo.title}
                            category = {todo.category}
                            upvotes = {todo.upvotes}
                            isUpvoted = {todo.isUpvoted}
                            status = {todo.status}
                            description = {todo.description}
                            commentCount = {(todo.comments)? (todo.comments.length):(0)}
                            setclass = {"in-progress"}
                            />
                            )
                        )}
                    </ul>
                    <ul className="view__list">
                        <li className="view__list-itemBg">
                            <h3 className="view__itemBg-heading">live {`(${live})`}</h3>
                            <p className="view__itemBg-text">Ideas prioritized for research</p>
                        </li>
                        { todos.map(todo =>
                        (todo.status == "live") &&
                            (
                            <ViewItem 
                            key = {todo.id}
                            id = {todo.id}
                            title = {todo.title}
                            category = {todo.category}
                            upvotes = {todo.upvotes}
                            isUpvoted = {todo.isUpvoted}
                            status = {todo.status}
                            description = {todo.description}
                            commentCount = {(todo.comments)? (todo.comments.length):(0)}
                            setclass = {"live"}
                            />
                            )
                        )}
                    </ul>
                    <ul className="view__list">
                        <li className="view__list-itemBg">
                            <h3 className="view__itemBg-heading">suggestion {`(${suggestion})`}</h3>
                            <p className="view__itemBg-text">Ideas prioritized for research</p>
                        </li>
                        { todos.map(todo =>
                        (todo.status == "suggestion") &&
                            (
                            <ViewItem 
                            key = {todo.id}
                            id = {todo.id}
                            title = {todo.title}
                            category = {todo.category}
                            upvotes = {todo.upvotes}
                            isUpvoted = {todo.isUpvoted}
                            status = {todo.status}
                            description = {todo.description}
                            commentCount = {(todo.comments)? (todo.comments.length):(0)}
                            setclass = {"suggestion"}
                            />
                            )
                        )}
                    </ul>
                </div>

        </div>
        </>
    )
}
export default View