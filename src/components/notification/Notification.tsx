import { FC } from "react";
import { IoNotificationsCircleSharp } from "react-icons/io5";

const Notification: FC = () => {
  return (
    <div>
      <IoNotificationsCircleSharp className="text-gray-500 text-3xl dark:text-gray-400 cursor-pointer" />
    </div>
  );
};

export default Notification;
