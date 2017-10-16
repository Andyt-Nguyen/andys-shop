import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
	<nav>
		<div className="nav">
			<Link to="/"><i style={{fontSize:"20px", color:"white"}} className="fa fa-bullseye"></i></Link>
			<Link to="/mac" style={{color:"white"}}>Mac</Link>
			<a>iPad</a>
			<a>iPhone</a>
			<a>Watch</a>
			<a>TV</a>
			<a>Music</a>
			<a>Support</a>
			<Link to="/"><i style={{fontSize:"20px", color:"white"}} className="fa fa-shopping-cart"></i></Link>
		</div>
	</nav>
);

export default NavBar;
