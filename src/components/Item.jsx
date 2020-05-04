import React from "react";
import {withRouter} from "react-router-dom"


function ParamsExample(props) {
	const {products, match} = props
	console.log(products)
	console.log(match)
	console.log(match.params.ProductId)

	return (
		// match = take the number from the url 
		<div>
		{match.params.ProductId==="1" && <div>I'm Iphone</div>}
		{match.params.ProductId==="2" && <div>I'm Ipad</div>}
		{match.params.ProductId==="3" && <div>I'm Ipod</div>}
		</div>
	);
}

export default withRouter(ParamsExample) 

