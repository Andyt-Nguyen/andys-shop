import React from 'react';

const CartItem = (props) => (
	<div style={{display:"flex", marginTop:"100px"}}>
		<img style={{marginLeft:'100px', marginRight:'50px', alignSelf: "flex-start"}} src="http://placehold.it/100"/>
			<div style={{width: "100%"}}>
				<div style={{display:"flex", justifyContent:"space-between", alignItems:"flex-end"}}>
					<h6>{props.name}</h6>
					<div style={{display:"flex", justifyContent:"space-around", width: "50%"}}>
						<span style={{fontSize:"13px"}}>{props.price}</span>
						<input style={{width:"30px"}}/>
						<span>{props.price}</span>
					</div>
			</div>

	<hr />

		<div style={{display:"flex", justifyContent:"space-between"}}>
			<p>Delivery: <span style={{color:'green'}}>in stock</span></p>
				<div>
					<p style={{color:"blue",margin:0,padding:0}}>Remove</p>
					<p style={{margin:0,padding:0}}></p>
				</div>
			</div>

		</div>

	</div>
);

export default CartItem;
