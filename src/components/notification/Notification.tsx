import { FC } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";

const Notification: FC = () => {
  return (
    <div className="bg-gray-200 rounded-full p-2">
      <IoMdNotificationsOutline className="text-gray-500 text-2xl dark:text-gray-400 cursor-pointer" />
    </div>
  );
};

export default Notification;
