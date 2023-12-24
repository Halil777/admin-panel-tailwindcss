import { FC } from "react";
import Toggle from "../theme/ThemeToggle";
import Notification from "../notification/Notification";
import Profile from "../profile/Profile";
import BaseSearch from "../common/search/BaseSearch";
import Language from "../language/Language";

const Navbar: FC = () => {
  return (
    <nav className="flex items-center justify-between bg-white border-gray-200 mx-2 px-2 py-2.5 rounded shadow-lg dark:bg-gray-800 dark:shadow-2xl">
      <BaseSearch />
      <div className="flex   gap-5 items-center">
        <Notification />
        <Toggle />
        <Language />
        <Profile />
      </div>
    </nav>
  );
};

export default Navbar;
