import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
	<nav>
		<div className="nav">
			<NavLink activeStyle={{color:"royal blue"}} to="/"><i style={{fontSize:"20px", color:"white"}} className="fa fa-bullseye"></i></NavLink>
			<NavLink activeStyle={{color:"royal blue"}} to="/mac" style={{color:"white"}}>Labtops</NavLink>
			<a>Clothing</a>
			<a>Photos</a>
			<a>Music</a>
			<NavLink activeStyle={{color:"royal blue"}} to="/cart"><i style={{fontSize:"20px", color:"white"}} className="fa fa-shopping-cart"></i></NavLink>
		</div>
	</nav>
);

export default NavBar;
