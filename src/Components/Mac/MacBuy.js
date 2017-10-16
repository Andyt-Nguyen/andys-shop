import React, { Component } from 'react';
import MiniNav from './MiniNav';
import ShopMac from './ShopMac';
import "./BuyMac.css";

class MacBuy extends Component {
	render() {
		return (
			<div className="container">
				<MiniNav />
				<div className="mac-buy">
					<h1 className="mac-buy-title">Choose your new MacBook Air.</h1>
					<h4>13-inch MacBook Air</h4>
					<p>Get help buying. Chat now or call 1-800-MY-APPLE.</p>
					<div className="mac-processor">

						<div style={{borderRight: "1px solid #ccc"}}>
							<ShopMac storage={"128GB Storage"} ssd={"128GB SSD storage1"} price={"$999.00"} />
						</div>
						<div style={{paddingLeft:"20px"}}>
							<ShopMac storage={"256GB Storage"} ssd={"256GB SSD storage1"} price={"$1,199.00"}/>
						</div>


					</div>
				</div>
			</div>
		);
	}
}

export default MacBuy;
