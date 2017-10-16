import React from 'react';

const TotalCart = () => (
	<div>
		<div style={{ display:"flex", justifyContent:"flex-end", flexDirection:"column", alignItems:"flex-end"}}>
			<p style={{width:"25%", display:"flex", justifyContent:"space-between",fontSize:"13px", padding:0, margin:0}}>Bag Subtotal <span>$999.00</span></p>
			<p style={{width:"25%", display:"flex", justifyContent:"space-between",fontSize:"13px", padding:0, margin:0}}>Shipping <span>$0.00</span></p>
		</div>
		<div style={{display:"flex", marginTop:"20px", justifyContent:"flex-end"}}>
			<p style={{width:"25%", borderTop:"1px solid #ccc", display:"flex", justifyContent:"space-between"}}>Subtotal <span>$999.00</span></p>
		</div>
	</div>
);

export default TotalCart;
