import "./navSingle.scss"
import { useParams } from "react-router-dom"
import Category from "../../components/category/category"
import emptyImg from "../../assets/img/empty.png"
import Feedbtn from "../../components/feedbtn/feedbtn"


const NavSingle = ({todos}) => {
    const param = useParams()

    let categoryArr = []

   todos.forEach(todo => {
    if(param.category === "all") {
        categoryArr.push(todo)
    } else if(todo.category === param.category) {
        categoryArr.push(todo)
    }
    return categoryArr
  }
  )
  
    return (
        <>
        {
            categoryArr.length? ( categoryArr.map(item => 
                <Category
                key = {item.id}
                id = {item.id}
                message = {item.upvotes}
                sarlavha = {item.title}
                isCount = {item.isUpvoted}
                paragraph = {item.description}
                category = {item.category}
                comment = {item.comments ? (item.comments.length):("0")}  
                />
            )):(
            <div className="addFeed__wrapper">
                <img className="addFeed__img" src={emptyImg} alt="emptyImg" width={130} height={137}/>
                <h3 className="addFeed__heading">There is no feedback yet.</h3>
                <p className="addFeed__text">Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</p>
                <Feedbtn  content="+ Add Feedback"  link="add"/>
            </div>
            )
        }
        </>
    )
}
export default NavSingle