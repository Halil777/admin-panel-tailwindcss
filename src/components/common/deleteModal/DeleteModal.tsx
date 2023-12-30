import React from "react";

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
}

const DeleteModal: React.FC<DeleteModalProps> = ({
  isOpen,
  onClose,
  onDelete,
}) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div className="fixed  left-0 w-full h-full flex items-start top-0 pt-52 justify-center">
      <div
        className="absolute top-0 left-0 w-full h-full bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="z-10 bg-white p-10 w-2/5 h-48  rounded-md">
        <p className="text-xl">Are you sure you want to delete this item?</p>
        <div className="mt-16 flex justify-end">
          <button
            className="bg-red-500 text-white px-3 py-1 rounded mr-2"
            onClick={onDelete}
          >
            Delete
          </button>
          <button className="bg-gray-300 px-3 py-1 rounded" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
