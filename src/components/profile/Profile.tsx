import { FC, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { MdKeyboardArrowUp } from "react-icons/md";

const Profile: FC = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative">
      <div className="flex gap-4">
        <div className="h-12 p-0.4 bg-gray-300 border-r"></div>
        <div
          className="flex gap-5 cursor-pointer items-center"
          onClick={toggleDropdown}
        >
          <img
            className="h-10 w-10 object-cover rounded-full"
            src="./images/avatar.jpg"
            alt="User Avatar"
          />
          <div className="flex flex-col">
            <label className="font-bold dark:text-white">Halil Gayypov</label>
            <label className="text-gray-300">Project Manager</label>
          </div>
          <div className="flex items-center p-2 justify-center w-6 h-6 rounded-full bg-gray-200">
            {isDropdownOpen ? (
              <MdKeyboardArrowUp className="text-gray-600 " />
            ) : (
              <FaChevronDown className="text-gray-600" />
            )}
          </div>
        </div>
      </div>

      {isDropdownOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white border border-gray-300 rounded shadow-lg">
          <div className="p-4">
            <p className="text-gray-800">First Name Last Name</p>
            <p className="text-gray-500">Project Manager</p>
            <button className="text-blue-500 hover:underline">
              Edit Profile
            </button>
            <button className="text-red-500 hover:underline">Logout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
