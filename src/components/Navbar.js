import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import '../css/Navbar.css';

class Navbar extends Component {
	render() {
		return (
			<nav className='navBar'>
				<div className='navDeliver'>
					<NavLink to="/Deliver" activeClassName='activeClass'>Deliver</NavLink>
                </div>
                <div className='navHeader'>
                    <NavLink to="/Header" activeClassName='activeClass'>Header</NavLink>
                </div>
                <div className='navAddShop'>
                    <NavLink to="/AddShop" activeClassName='activeClass'>AddShop</NavLink>
                </div>
				<div className='navAddShop2'>
                    <NavLink to="/AddShop2" activeClassName='activeClass'>AddShop2</NavLink>
                </div>
			</nav>	
		);
	}
}

export default Navbar;
