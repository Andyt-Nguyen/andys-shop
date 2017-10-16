import React, { Component } from 'react';
import TotalCart from './TotalCart';
import FreeHeading from './FreeHeading';
import CartItem from './CartItem';
import './Cart.css';

class CartPage extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div style={{marginTop:'50px'}} className="container">
				<FreeHeading />
				<div style={{marginTop:"30px"}} className="card">
					<div className="card-body">
						<CartItem name={"10.5-inch iPad Pro Wi-Fi 512GB - Silver"} price={"$999.00"}/>
						<hr />
						<TotalCart />
					</div>
				</div>
			</div>
		);
	}
}

export default CartPage;
