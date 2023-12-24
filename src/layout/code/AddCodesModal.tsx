// import React, { useState, useContext } from "react";
// import { ThemeContext } from "../../components/theme/ThemeContext";

import { useState } from "react";

interface AddCodesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (newCode: {
    id: number;
    code: string;
    title: string;
    description: string;
    shortName: string;
    parentId: number;
    status: string;
  }) => void;
}

const AddCodesModal: React.FC<AddCodesModalProps> = ({
  isOpen,
  onClose,
  onAdd,
}) => {
  // const { theme } = useContext(ThemeContext) ?? { theme: undefined };

  const [newCode, setNewCode] = useState({
    id: 0,
    code: "",
    title: "",
    description: "",
    shortName: "",
    parentId: 0,
    status: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();

    const { name, value } = e.target;
    setNewCode((prevCode) => ({
      ...prevCode,
      [name]: value,
    }));
  };
  const handleAddClick = () => {
    onAdd(newCode);
    onClose();
  };

  const handleCancelClick = () => {
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-end">
          <div
            className={`bg-white w-1/2 h-full overflow-y-auto transition-transform transform ease-in-out duration-300`}
          >
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4">Add Codes</h2>
              {/* Input fields */}
              <div className="mb-4 flex justify-between">
                <div className="w-1/2 pr-2">
                  <label
                    htmlFor="code"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Code
                  </label>
                  <input
                    type="text"
                    id="code"
                    name="code"
                    value={newCode.code}
                    onChange={handleInputChange}
                    onClick={(e) => e.stopPropagation()}
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                </div>
                <div className="w-1/2 pl-2">
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={newCode.title}
                    onChange={handleInputChange}
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                </div>
              </div>
              <div className="mb-4 flex justify-between">
                {/* Add more input fields for other properties */}
                <div className="w-1/2 pr-2">
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Description
                  </label>
                  <input
                    type="text"
                    id="description"
                    name="description"
                    value={newCode.description}
                    onChange={handleInputChange}
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                </div>
                <div className="w-1/2 pl-2">
                  <label
                    htmlFor="shortName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Short Name
                  </label>
                  <input
                    type="text"
                    id="shortName"
                    name="shortName"
                    value={newCode.shortName}
                    onChange={handleInputChange}
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                </div>
              </div>
              <div className="mb-4 flex justify-between">
                <div className="w-1/2 pr-2">
                  <label
                    htmlFor="parentId"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Parent ID
                  </label>
                  <input
                    type="number"
                    id="parentId"
                    name="parentId"
                    value={newCode.parentId}
                    onChange={handleInputChange}
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                </div>
                <div className="w-1/2 pl-2">
                  <label
                    htmlFor="status"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Status
                  </label>
                  <input
                    type="text"
                    id="status"
                    name="status"
                    value={newCode.status}
                    onChange={handleInputChange}
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  className={`bg-green-500 text-white py-2 px-4 rounded`}
                  onClick={handleAddClick}
                >
                  Add
                </button>
                <button
                  className={`bg-red-500 text-white py-2 px-4 ml-2 rounded`}
                  onClick={handleCancelClick}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={onClose}
          ></div>
        </div>
      )}
    </>
  );
};

export default AddCodesModal;
