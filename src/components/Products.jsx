import React from "react";



const AboutPage = () => {
	return (
		<ul className="product_list">
			<li>
				<img
					style={{ height: "50px", margin: "10px"}}
					src="https://d3m9l0v76dty0.cloudfront.net/system/photos/4328337/original/fa70ad17e869095038ef43cdc54d2cf4.jpg"
					/>
					Iphone{" "}
			</li>
			<li>
				<img
					style={{ height: "50px" , margin: "10px"}}
					src="https://d3m9l0v76dty0.cloudfront.net/system/photos/4636409/large/8c74c7ba7b90b16ef9ac6a85c4c47b02.jpg"
					/>
					Ipad{" "}
			</li>
			<li>
				<img
					style={{ height: "50px" , margin: "10px"}}
					src="https://img.wisebuy.co.il/data/MPeg3/nano_4.jpg"
					/>
					Ipod{" "}
			</li>
		</ul>
	);
};

export default AboutPage;
