import "./feedback.scss"
import Feedbtn from "../feedbtn/feedbtn"
import lamb from "../../assets/img/lamb.svg"

function Feedback() {

    return (
        <>
            <div className="feed">
                <div className="feed-box">
                    <img className="feed-img" src={lamb} alt="" width={23} height={24}/>
                    <p className="feed-desc">6 Suggestions</p>
                    <div className="feed-wrapper">Sort by : 
                        <select className="feed-wrapper-select">
                            <option className="select-option">Most Upvotes</option>
                        </select>
                    </div>
                </div>
    
                <Feedbtn content="+ Add Feedback" link="add" id={1}/>
            </div>

            <ul className="categories-list">

            </ul>
        </>
    )
}
export default Feedback