import React from 'react';
import { NavLink } from 'react-router-dom';

const MiniNav = () => (
	<section className="mini-nav">
		<div className="mac-mini-nav">
			<div className="mac-title-container">
				<h4 className="mac-title">MacBook Air</h4>
			</div>
			<div className="side-title">
				<NavLink to="/mac" style={{color:"#656565"}} activeStyle={{color:"red"}}>Overview</NavLink>
				<NavLink to="/mac/buy" style={{color:"#656565"}} activeStyle={{color:"red"}}>Buy</NavLink>
			</div>
		</div>
		<div id="grey-border"></div>
	</section>
);

export default MiniNav;
