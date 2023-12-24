import React from "react";
// import { ThemeContext } from "../../components/theme/ThemeContext";

interface ViewCodesModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: {
    id: number;
    code: string;
    title: string;
    description: string;
    shortName: string;
    parentId: number;
    status: string;
    subItems?: {
      id: number;
      code: string;
      title: string;
      description: string;
      shortName: string;
      parentId: number;
      status: string;
    }[];
  };
}

const ViewCodesModal: React.FC<ViewCodesModalProps> = ({
  isOpen,
  onClose,
  item,
}) => {
  //   const { theme } = useContext(ThemeContext) ?? { theme: undefined };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className={`bg-white w-full h-full overflow-y-auto transition-transform transform ease-in-out duration-300`}
          >
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4">View Item</h2>
              <div className="mb-4">
                <label
                  htmlFor="code"
                  className="block text-sm font-medium text-gray-700"
                >
                  Code
                </label>
                <p className="mt-1 p-2 border rounded-md">{item.code}</p>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Title
                </label>
                <p className="mt-1 p-2 border rounded-md">{item.title}</p>
              </div>
              {/* Add more fields for other properties */}
              {/* ... */}
              <div className="mb-4">
                <label
                  htmlFor="status"
                  className="block text-sm font-medium text-gray-700"
                >
                  Status
                </label>
                <p className="mt-1 p-2 border rounded-md">{item.status}</p>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="parentId"
                  className="block text-sm font-medium text-gray-700"
                >
                  Parent ID
                </label>
                <p className="mt-1 p-2 border rounded-md">{item.parentId}</p>
              </div>
              {item.subItems && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">SubItems</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {item.subItems.map((subItem) => (
                      <div key={subItem.id} className="mb-4">
                        <p className="font-medium">ID: {subItem.id}</p>
                        <p>Title: {subItem.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <div className="flex justify-end">
                <button
                  className={`bg-blue-500 text-white py-2 px-4 rounded`}
                  onClick={onClose}
                >
                  Close
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

export default ViewCodesModal;
