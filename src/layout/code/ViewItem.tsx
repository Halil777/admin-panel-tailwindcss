import { FC } from "react";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const ViewItem: FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="w-full p-10 bg-gray-100 dark:bg-slate-800 rounded text-gray-700  dark:text-white shadow-lg">
        <div className="flex justify-between align-center">
          <label className="text-2xl dark:text-white">View Item</label>
          <IoMdClose
            title="Close"
            onClick={() => navigate("/codes")}
            className="text-2xl cursor-pointer dark:text-white"
          />
        </div>
        <div className="grid  md:grid-cols-2 lg:grid-cols-4   mt-10 gap-5 w-full">
          <div>
            <label htmlFor="code" className="block text-sm font-medium ">
              Code
            </label>
            <p className="mt-1 p-2 border rounded-md">Kode</p>
          </div>
          <div>
            <label htmlFor="title" className="block text-sm font-medium ">
              Title
            </label>
            <p className="mt-1 p-2 border rounded-md">Title</p>
          </div>
          <div>
            <label htmlFor="status" className="block text-sm font-medium ">
              Status
            </label>
            <p className="mt-1 p-2 border rounded-md">Status</p>
          </div>
          <div>
            <label htmlFor="parentId" className="block text-sm font-medium ">
              Parent ID
            </label>
            <p className="mt-1 p-2 border rounded-md">Parent ID</p>
          </div>
          <div>
            <label htmlFor="parentId" className="block text-sm font-medium ">
              Description
            </label>
            <p className="mt-1 p-2 border rounded-md">Description</p>
          </div>
          <div>
            <label htmlFor="parentId" className="block text-sm font-medium ">
              Short Name
            </label>
            <p className="mt-1 p-2 border rounded-md">Short Name</p>
          </div>
        </div>
        <div className="mt-10 gap-5">
          <h3 className="text-lg font-semibold mb-2">SubItems</h3>
          <div className="mb-4">
            <p className="font-medium">ID: Sub Item ID</p>
            <p>Title: Sub Title</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewItem;
