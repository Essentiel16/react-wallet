import { NotificationManager } from "react-notifications";

const Alert = (type, value) => {
  const timeOut = 3000;
switch (type) {
    case "success":
      NotificationManager.success(value, "", timeOut);
      break;
    case "error":
      NotificationManager.error(value, "", timeOut);
      break;
      default:
      return "";
  }
};
export default Alert;