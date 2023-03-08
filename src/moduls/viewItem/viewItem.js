import NavItem from "../../components/navItem/navItem.component"
import "./viewItem.scss"
import topIcon from '../../assets/img/top-icon.svg'
import sendImg from '../../assets/img/send.svg'

const ViewItem = ({ id, title, category, upvotes, isUpvoted, status, description, commentCount, setclass}) => {
    return (
        <>
            <li className="view__item">
                <div className={`view__item-span ${setclass}`}></div>
                <div className="view__item-statusWr">
                    <div className={`view__statusWr-box ${setclass}`}></div>
                    <h4 className="view__statusWr-status">{status}</h4>
                </div>
                <p className="view__item-title">{title}</p>
                <p className="view__item-desc">{description}</p>
                <NavItem category = "feature"/>
                <div className="view__item-wrapper">
                    <div className="view__wrapper-upvotes">
                        <img className="view__upvotes-img" src={topIcon} alt="topIcon"  width={16} height={8}/>
                        <span className="view__upvotes-content">{upvotes}</span>
                    </div>
                    <div className="view__wrapper-comment">
                        <img  className="view__comment-img" src={sendImg} alt="sendImg" width={18} height={16}/> 
                        <span className="view__comment-content">{commentCount}</span>
                    </div>
                </div>
            </li>
        </>
    )
}
export default ViewItem