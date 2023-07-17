// import React from 'react';
// import { Breadcrumb } from 'antd';
// const App = () => (
//   <Breadcrumb
//     items={[
//       {
//         title: 'Home',
//       },
//       {
//         title: <a href="">Application Center</a>,
//       },
//       {
//         title: <a href="">Application List</a>,
//       },
//       {
//         title: 'An Application',
//       },
//     ]}
//   />
// );
// export default App;

import React from 'react'

export default function HeaderMain() {
	return (
		<div className="header">
			<nav aria-label="breadcrumb">
				<ol className="breadcrumb" style={{ backgroundColor: 'white' }}>
					<li className="breadcrumb-item">Project</li>
					<li className="breadcrumb-item">CyberLearn</li>
					<li className="breadcrumb-item active" aria-current="page">
						Cyber Board
					</li>
				</ol>
			</nav>
		</div>

	)
}
