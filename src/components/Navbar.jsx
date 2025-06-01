import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';

const Navbar=()=>{
    return(
        <nav className='navbar navbar-expand-lg bg-body-tertiary'>
            <ul className='navbar-nav'>
                <li className='nav-item'>
                    
                    <NavLink to="/" exact activeClassName="active">Home</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to="/products" activeClassName="active">Products</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to="/contact" activeClassName="active">Contact</NavLink>
                </li>
            </ul>
        </nav>
    );
};


export default Navbar;