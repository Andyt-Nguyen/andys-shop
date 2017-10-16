import React from 'react';

const ShopMac = (props) => (
	<div>
		<img src="https://s1.postimg.org/2evfde4jhb/Screen_Shot_2017-10-15_at_7.06.34_PM.png"/>
		<div className="mac-processor-container">
			<h4 className="mac-processor-title">1.8GHz Processor</h4>
			<h4 className="mac-processor-desc">{props.storage}</h4>
			<p>1.8GHz dual-core Intel Core i5 processor</p>
			<p>Turbo Boost up to 2.9GHz</p>
			<p>8GB 1600MHz LPDDR3 memory</p>
			<p>{props.ssd}</p>
			<p>Intel HD Graphics 6000</p>
			<h4 className="mac-price">{props.price}</h4>
			<button className="mac-select btn btn-color">Select</button>
		</div>
		<div className="mac-delivery">
			<i style={{fontSize: "30px"}} className="fa fa-cubes"></i>
			<div>
				<p className="deliv-desc">Order today, delivers:</p>
				<p className="deliv-desc">Tue Oct 17 – Fastest</p>
				<p className="deliv-desc">Wed Oct 18 – Free</p>
			</div>
		</div>
	</div>
);

export default ShopMac;
