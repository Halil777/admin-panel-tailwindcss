import { FC } from "react";

const Profile: FC = () => {
  return (
    <div className="flex items-center space-x-4">
      <div className="h-8 w-8 cursor-pointer rounded-full overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src="./images/avatar.jpg"
          alt="User Avatar"
        />
      </div>
    </div>
  );
};

export default Profile;
