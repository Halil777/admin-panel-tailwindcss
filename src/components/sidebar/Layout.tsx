import { FC } from "react";
import Sidebar from "./Sidebar";
import Navbar from "../navbar/Navbar";

const Layout: FC = ({ children }) => {
  return (
    <>
      <div className="flex flex-auto h-screen">
        <Sidebar />
        <div className="grow">
          <Navbar />
          <div className="m-5">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
