import { notification } from "antd";

//function: notification from Ant Design
export const notificationFunction = (type, message, description = "") => {
	notification[type]({
		message: message,
		description: description,
	});
};
