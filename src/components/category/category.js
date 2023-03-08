import "./category.scss"
import topIcon from '../../assets/img/top-icon.svg'
import NavItem from '../navItem/navItem.component'
import sendImg from '../../assets/img/send.svg'

import { Link } from 'react-router-dom'





function Category(prop) {
    

    return (
        <>
        <Link className="link" to={`/single/${prop.id}`}>
            
            <div className="category-item__wrapper">
                <div className="category-item__box">
                    <img className="category-item__box-img" src={topIcon} alt="topIcon" width={16} height={8} />

                    <span className="category-item__box-span">{(prop.message) ? (prop.message):('0')}</span>
                </div>
                <div className="category-item__body">
                    <h4 className="category-item__heading">{prop.sarlavha}</h4>
                    <p className="category-item__desc">{prop.paragraph}</p>

                     <NavItem 
                         key = {prop.id}
                         category = {prop.category}
                     />

                </div>
            </div>


            <div className="category-send">
                <img className="category-send__img" src={sendImg} alt="send" />
                <span className='category-send__number'>{prop.comment}</span>
            </div>
            
        </Link>
        </>
    ) 
}
export default Category