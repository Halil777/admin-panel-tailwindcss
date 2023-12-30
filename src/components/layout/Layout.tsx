import { FC, ReactNode } from "react";
import Sidebar from "./sidebar/Sidebar";
import Navbar from "./navbar/Navbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="flex min-w-full flex-auto min-h-screen">
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
