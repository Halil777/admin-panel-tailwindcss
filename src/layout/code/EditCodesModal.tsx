import { FC, useState } from "react";

const EditCodesModal: FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <>
        <button
          type="button"
          className="bg-blue-500 text-white py-1 px-2 mr-2 rounded"
          onClick={() => setShowModal(true)}
        >
          Edit
        </button>
        {showModal ? (
          <>
            <div className="fixed inset-0 z-50 flex items-center justify-end">
              <div className="bg-white w-3/5  h-full p-10 overflow-y-auto ">
                <div className="border-0 rounded-lg p-5 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-3xl text-black font-semibold">
                      Edit Code
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="text-black h-6 w-6 text-2xl  outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  <div className="mb-4 mt-5 flex justify-between">
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
                        className="mt-1 p-2 w-full border rounded-md"
                      />
                    </div>
                  </div>
                  <div className="mb-4 flex justify-between">
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
                        className="mt-1 p-2 w-full border rounded-md"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-end mt-3 p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Cancel
                    </button>
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </>
    </div>
  );
};

export default EditCodesModal;
