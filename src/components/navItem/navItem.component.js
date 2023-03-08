
// import { Link } from 'react-router-dom';
import React from 'react';
import './navItem.styled'
import { NavItemLink, NavLi } from './navItem.styled';


function NavItem({category}) {
    return (

        <NavLi>
           <NavItemLink>{category}</NavItemLink>
        </NavLi>


    );
}
export default NavItem