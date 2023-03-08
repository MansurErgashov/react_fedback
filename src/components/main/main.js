import "./main.scss"
import Feedback from "../feedback/feedback"
import CategoryList from "../categoryList/categoryList"
import { useContext } from "react"
import { TodosContext } from "../../App"

function Main() {
    const {todos, setTodos} = useContext(TodosContext)
    return (
        <div className="box">
        <Feedback />
        <CategoryList todos = {todos} setTodos = {setTodos}/>
        </div>
    )
}

export default Main