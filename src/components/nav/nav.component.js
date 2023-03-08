
import { NavLink, } from "react-router-dom";
import NavItem from "../navItem/navItem.component"
import './nav.styled'
import "./nav.scss"
import { Navigation, NavigationList } from "./nav.styled";

function Nav() {
    const categoryArr = [
        {
            id: 1,
            category: "all"
        },
        {
            id: 2,
            category:"UI"
        },
        {
            id: 3,
            category:"UX"
        },
        {
            id: 4,
            category:"enhancement"
        },
        {
            id: 5,
            category:"bug"
        },
        {
            id: 6,
            category:"feature"
        },
    ]
    return (
        <Navigation>
            <NavigationList>
                { categoryArr.map((item) =>
                    <NavLink className={({isActive}) => isActive ? ("nav__link nav__link--active"):("nav__link")}  to={`/nav/${item.category}`}> 
                        <NavItem
                        key = {item.id}
                        category = {item.category} 
                        />
                    </NavLink>
                )}
            </NavigationList>
        </Navigation>
    );
}
export default Nav