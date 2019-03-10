import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import '../css/Navbar.css';

class Navbar extends Component {
	render() {
		return (
			<nav className='navBar'>
				<div className='navLink'>
					<NavLink to="/DropDown" activeClassName='activeClass'>DropDown</NavLink>
                </div>
                <div className='navLink'>
                    <NavLink to="/Header" activeClassName='activeClass'>Header</NavLink>
                </div>
                <div className='navLink'>
                    <NavLink to="/AddShop" activeClassName='activeClass'>AddShop</NavLink>
                </div>
			</nav>	
		);
	}
}

export default Navbar;
