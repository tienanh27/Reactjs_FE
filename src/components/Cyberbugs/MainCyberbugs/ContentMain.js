// import React from "react";
// import { Avatar } from "antd";
// import { useDispatch } from "react-redux";
// import {
// 	GET_TASK_DETAIL_SAGA,
// 	SHOW_MODAL,
// 	UPDATE_STATUS_TASK_SAGA,
// } from "../../../redux/types/TaskCyberbugsType";
// import { GET_USERS_BY_PROJECT_SAGA } from "../../../redux/types/UserCyberbugType";
// import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
// import { GET_COMMENT_SAGA } from "../../../redux/types/CommentType";
// import ModalCyberbugs from "../ModalCyberbugs/ModalCyberbugs";
// import { useSelector } from "react-redux";

// export default function ContentMain(props) {
// 	const dispatch = useDispatch();
// 	const { isShowModal } = useSelector((state) => state.TaskCyberbugsReducer);

// 	const { projectDetail } = props;

// 	const renderLstTaskDetail = (lstTask) => {
// 		return lstTask.lstTaskDeTail?.map((task, index) => {
// 			let classPriority =
// 				task.priorityTask.priorityId === 1
// 					? "text-green-500"
// 					: task.priorityTask.priorityId === 2
// 					? "text-blue-500"
// 					: task.priorityTask.priorityId === 3
// 					? "text-yellow-500"
// 					: "text-red-500";
// 			return (
// 				<Draggable
// 					key={task.taskId.toString()}
// 					index={index}
// 					draggableId={task.taskId.toString()}>
// 					{(provided) => {
// 						return (
// 							<li
// 								ref={provided.innerRef}
// 								{...provided.draggableProps}
// 								{...provided.dragHandleProps}
// 								className='list-group-item mb-2'
// 								data-toggle='modal'
// 								data-target='#infoModal'
// 								onClick={() => {
// 									dispatch({
// 										type: SHOW_MODAL,
// 									});
// 									dispatch({
// 										type: GET_TASK_DETAIL_SAGA,
// 										taskId: task.taskId,
// 									});
// 									dispatch({
// 										type: GET_COMMENT_SAGA,
// 										taskId: task.taskId,
// 									});
// 									dispatch({
// 										type: GET_USERS_BY_PROJECT_SAGA,
// 										projectId: projectDetail.id,
// 									});
// 								}}>
// 								<p>{task.taskName}</p>
// 								<div className='block' style={{ display: "flex" }}>
// 									<div className='block-left'>
// 										<p className={`${classPriority} font-weight-bold`}>
// 											{task.priorityTask.priority}
// 										</p>
// 									</div>
// 									<div className='block-right'>
// 										<div className='avatar-group' style={{ display: "flex" }}>
// 											<Avatar.Group
// 												maxCount={2}
// 												size='large'
// 												maxStyle={{
// 													color: "#f56a00",
// 													backgroundColor: "#fde3cf",
// 												}}>
// 												{task.assigness?.map((item, index) => {
// 													return (
// 														<Avatar
// 															src={item.avatar}
// 															key={index}
// 															alt={item.avatar}
// 														/>
// 													);
// 												})}
// 											</Avatar.Group>
// 										</div>
// 									</div>
// 								</div>
// 							</li>
// 						);
// 					}}
// 				</Draggable>
// 			);
// 		});
// 	};

// 	const renderLstTask = () => {
// 		return projectDetail.lstTask?.map((lstTask, index) => {
// 			return (
// 				<Droppable droppableId={lstTask.statusId} key={index}>
// 					{(provided) => {
// 						return (
// 							<div
// 								className='card'
// 								ref={provided.innerRef}
// 								{...provided.droppableProps}>
// 								<div className='card-header mb-2'>
// 									<span className='font-semibold'>{lstTask.statusName}</span>{" "}
// 									<span className='font-bold'>
// 										{lstTask.lstTaskDeTail.length}
// 									</span>
// 								</div>
// 								<ul className='list-group list-group-flush'>
// 									{renderLstTaskDetail(lstTask)}
// 									{provided.placeholder}
// 								</ul>
// 							</div>
// 						);
// 					}}
// 				</Droppable>
// 			);
// 		});
// 	};

// 	const handleDragEnd = (result) => {
// 		const { destination, source } = result;
// 		if (!destination) {
// 			return;
// 		}
// 		if (
// 			source.index === destination.index &&
// 			source.droppableId === destination.droppableId
// 		) {
// 			return;
// 		}
// 		dispatch({
// 			type: UPDATE_STATUS_TASK_SAGA,
// 			statusTaskUpdate: {
// 				taskId: result.draggableId,
// 				statusId: destination.droppableId,
// 			},
// 			projectId: projectDetail.id,
// 		});
// 	};

// 	return (
// 		<>
// 			<div className='content grid grid-cols-4 gap-4'>
// 				<DragDropContext onDragEnd={handleDragEnd}>
// 					{renderLstTask()}
// 				</DragDropContext>
// 			</div>
// 			<div className={`${isShowModal ? "block" : "hidden"}`}>
// 				<ModalCyberbugs />
// 			</div>
// 		</>
// 	);
// }

// Test Part 2
import React from 'react'

export default function ContentMain() {
	return (
		<div className="content" style={{ display: 'flex' }}>
			<div className="card" style={{ width: '17rem', height: '25rem' }}>
				<div className="card-header">
					BACKLOG 3
				</div>
				<ul className="list-group list-group-flush">
					<li className="list-group-item" data-toggle="modal" data-target="#infoModal" style={{ cursor: 'pointer' }}>
						<p>
							Each issue has a single reporter but can have multiple
							assignees
						</p>
						<div className="block" style={{ display: 'flex' }}>
							<div className="block-left">
								<i className="fa fa-bookmark" />
								<i className="fa fa-arrow-up" />
							</div>
							<div className="block-right">
								<div className="avatar-group" style={{ display: 'flex' }}>
									<div className="avatar">
										<img src="./assets/img/download (1).jfif" alt />
									</div>
									<div className="avatar">
										<img src="./assets/img/download (2).jfif" alt />
									</div>
								</div>
							</div>
						</div>
					</li>
					<li className="list-group-item">
						<p>
							Each issue has a single reporter but can have multiple
							assignees
						</p>
						<div className="block" style={{ display: 'flex' }}>
							<div className="block-left">
								<i className="fa fa-check-square" />
								<i className="fa fa-arrow-up" />
							</div>
							<div className="block-right">
								<div className="avatar-group" style={{ display: 'flex' }}>
									<div className="avatar">
										<img src="./assets/img/download (1).jfif" alt />
									</div>
									<div className="avatar">
										<img src="./assets/img/download (2).jfif" alt />
									</div>
								</div>
							</div>
						</div>
					</li>
					<li className="list-group-item">Vestibulum at eros</li>
				</ul>
			</div>
			<div className="card" style={{ width: '17rem', height: '25rem' }}>
				<div className="card-header">
					SELECTED FOR DEVELOPMENT 2
				</div>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">Cras justo odio</li>
					<li className="list-group-item">Dapibus ac facilisis in</li>
				</ul>
			</div>
			<div className="card" style={{ width: '17rem', height: '25rem' }}>
				<div className="card-header">
					IN PROGRESS 2
				</div>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">Cras justo odio</li>
					<li className="list-group-item">Dapibus ac facilisis in</li>
				</ul>
			</div>
			<div className="card" style={{ width: '17rem', height: '25rem' }}>
				<div className="card-header">
					DONE 3
				</div>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">Cras justo odio</li>
					<li className="list-group-item">Dapibus ac facilisis in</li>
					<li className="list-group-item">Vestibulum at eros</li>
				</ul>
			</div>
		</div>

	)
}
