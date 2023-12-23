import { FC } from "react";
import Toggle from "../theme/ThemeToggle";
import DefaultHeader from "../header/DefaultHeader";

const Navbar: FC = () => {
  return (
    <nav className="bg-white border-gray-200 mx-2 px-2 py-2.5 rounded dark:bg-gray-800">
      <div className="container flex justify-end gap:5 items-center mx-auto pt-3">
        <DefaultHeader />
        <div className="flex align-center justify-end pr-4">
          <Toggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
