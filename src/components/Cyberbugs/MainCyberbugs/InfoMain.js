// import React from "react";
// import { Avatar } from "antd";

// export default function InfoMain(props) {
// 	const renderMembers = () => {
// 		return props.members?.map((item, index) => {
// 			return <Avatar src={item.avatar} key={index} />;
// 		});
// 	};

// 	return (
// 		<div className='info flex items-center my-4'>
// 			<p>Members: </p>
// 			<div className='avatar-group flex'>
// 				<Avatar.Group
// 					maxCount={2}
// 					size='large'
// 					maxStyle={{ color: "#f56a00", backgroundColor: "#fde3cf" }}>
// 					{renderMembers()}
// 				</Avatar.Group>
// 			</div>
// 		</div>
// 	);
// }

import React from 'react'

export default function InfoMain() {
	return (
		<div class="info" style="display: flex;">
			<div class="search-block">
				<input class="search" />
				<i class="fa fa-search"></i>
			</div>
			<div class="avatar-group" style="display: flex;">
				<div class="avatar">
					<img src="./assets/img/download (1).jfif" alt="" />
				</div>
				<div class="avatar">
					<img src="./assets/img/download (2).jfif" alt="" />
				</div>
				<div class="avatar">
					<img src="./assets/img/download (3).jfif" alt="" />
				</div>
			</div>
			<div style="margin-left: 20px;" class="text">Only My Issues</div>
			<div style="margin-left: 20px;" class="text">Recently Updated</div>
		</div>

	)
}

