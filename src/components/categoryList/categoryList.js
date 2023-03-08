import "./categoryList.scss"
import Category from "../category/category"
import { Routes, Route } from "react-router-dom"
import NavSingle from "../../moduls/navSingle/navSingle"


function CategoryList({todos, setTodos})  {
   
    return (
        <ul className="category-list">
            <Routes>
               <Route path="*" element={todos.map(item => 
                <Category
                  key = {item.id}
                  id = {item.id}
                  message = {(item.upvotes) ? (item.upvotes):('0')}
                  sarlavha = {item.title}
                  isCount = {item.isUpvoted}
                  paragraph = {item.description}
                  category = {item.category}
                  comment = {(item.comments) ? (item.comments.length):('0')} 
                 />) 
               }/>
               
               <Route path="/nav/:category" element={<NavSingle  todos={todos} />}/>
            </Routes>
               
        </ul>
    )
}
export default CategoryList