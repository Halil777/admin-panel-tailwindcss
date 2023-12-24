import React, { useState, useContext } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import DeleteModal from "../../components/common/deleteModal/DeleteModal";
import { ThemeContext } from "../../components/theme/ThemeContext";
import AddCodesModal from "./AddCodesModal";
import ViewCodesModal from "./ViewCodesModal";

interface SubItem {
  id: number;
  code: string;
  title: string;
  description: string;
  shortName: string;
  parentId: number;
  status: string;
}

interface TableProps {
  data: {
    id: number;
    code: string;
    title: string;
    description: string;
    shortName: string;
    parentId: number;
    status: string;
    subItems?: SubItem[];
  }[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onView: (id: number) => void;
}

const CodesTable: React.FC<TableProps> = ({
  data,
  onEdit,
  onDelete,
  onView,
}) => {
  const [openRows, setOpenRows] = useState<number[]>([]);
  const [deleteItemId, setDeleteItemId] = useState<number | null>(null);
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [viewItem, setViewItem] = useState<{
    isOpen: boolean;
    item: TableProps["data"][0];
  }>({ isOpen: false, item: {} });

  const openAddModal = () => {
    setAddModalOpen(true);
  };

  const closeAddModal = () => {
    setAddModalOpen(false);
  };

  const handleAddCode = (newCode: NewCodeType) => {
    console.log("Adding new code:", newCode);
  };

  const { theme } = useContext(ThemeContext) ?? { theme: undefined };

  const toggleRow = (id: number) => {
    if (openRows.includes(id)) {
      setOpenRows(openRows.filter((rowId) => rowId !== id));
    } else {
      setOpenRows([...openRows, id]);
    }
  };

  const handleRowClick = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    toggleRow(id);
  };

  const handleDeleteClick = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    setDeleteItemId(id);
  };

  const handleDeleteConfirm = () => {
    if (deleteItemId !== null) {
      onDelete(deleteItemId);
      setDeleteItemId(null);
    }
  };

  const handleDeleteCancel = () => {
    setDeleteItemId(null);
  };

  return (
    <div
      className={`p-10 ${
        theme === "dark" ? "bg-light text-dark" : "bg-dark text-light"
      } rounded-2xl shadow-lg dark:bg-gray-800 dark:shadow-2xl bg-white`}
    >
      <div
        className={`flex justify-between align-center mb-5 ${
          theme === "dark" ? "dark:text-white" : ""
        }`}
      >
        <span className={theme === "dark" ? "dark:text-white" : ""}>
          Codes Table
        </span>
        <button
          className={`${
            theme === "dark" ? "bg-green-600" : "bg-green-600"
          } text-white py-2 px-4 rounded hover:bg-green-600`}
          onClick={openAddModal}
        >
          Add Codes
        </button>
      </div>
      <table
        className={`min-w-full ${
          theme === "dark" ? "bg-light" : "bg-dark"
        } border border-gray-300`}
      >
        <thead>
          <tr>
            <th
              className={`py-2 px-4 border-b text-center  ${
                theme === "dark" ? "dark:text-white" : ""
              }`}
            >
              ID
            </th>
            <th
              className={`py-2 px-4 border-b text-center  ${
                theme === "dark" ? "dark:text-white" : ""
              }`}
            >
              Code
            </th>
            <th
              className={`py-2 px-4 border-b text-center  ${
                theme === "dark" ? "dark:text-white" : ""
              }`}
            >
              Title
            </th>
            <th
              className={`py-2 px-4 border-b text-center  ${
                theme === "dark" ? "dark:text-white" : ""
              }`}
            >
              Description
            </th>
            <th
              className={`py-2 px-4 border-b text-center  ${
                theme === "dark" ? "dark:text-white" : ""
              }`}
            >
              Short Name
            </th>
            <th
              className={`py-2 px-4 border-b text-center  ${
                theme === "dark" ? "dark:text-white" : ""
              }`}
            >
              Parent ID
            </th>
            <th
              className={`py-2 px-4 border-b text-center  ${
                theme === "dark" ? "dark:text-white" : ""
              }`}
            >
              Status
            </th>
            <th
              className={`py-2 px-4 border-b text-center  ${
                theme === "dark" ? "dark:text-white" : ""
              }`}
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <React.Fragment key={item.id}>
              <tr
                className={`${openRows.includes(item.id) ? "bg-gray-200" : ""}`}
                style={{ cursor: "pointer" }}
                onClick={(e) => handleRowClick(e, item.id)}
              >
                <td
                  className={`py-2 px-4 border-b text-center  ${
                    theme === "dark" ? "dark:text-white" : ""
                  }`}
                >
                  {item.id}
                </td>
                <td
                  className={`py-2 px-4 border-b text-center  ${
                    theme === "dark" ? "dark:text-white" : ""
                  }`}
                >
                  {item.code}
                </td>
                <td
                  className={`py-2 px-4 border-b text-center  ${
                    theme === "dark" ? "dark:text-white" : ""
                  }`}
                >
                  {item.title}
                </td>
                <td
                  className={`py-2 px-4 border-b text-center  ${
                    theme === "dark" ? "dark:text-white" : ""
                  }`}
                >
                  {item.description}
                </td>
                <td
                  className={`py-2 px-4 border-b text-center  ${
                    theme === "dark" ? "dark:text-white" : ""
                  }`}
                >
                  {item.shortName}
                </td>
                <td
                  className={`py-2 px-4 border-b text-center  ${
                    theme === "dark" ? "dark:text-white" : ""
                  }`}
                >
                  {item.parentId}
                </td>
                <td
                  className={`py-2 px-4 border-b text-center  ${
                    theme === "dark" ? "dark:text-white" : ""
                  }`}
                >
                  {item.status}
                </td>
                <td
                  className={`py-2 px-4 border-b text-center  ${
                    theme === "dark" ? "dark:text-white" : ""
                  }`}
                >
                  <button
                    className="bg-blue-500 text-white py-1 px-2 mr-2 rounded"
                    onClick={openAddModal}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white py-1 px-2 mr-2 rounded"
                    onClick={(e) => handleDeleteClick(e, item.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="bg-green-500 text-white py-1 px-2 rounded"
                    onClick={(e) => {
                      e.stopPropagation();
                      setViewItem({ isOpen: true, item });
                    }}
                  >
                    <FaRegEyeSlash />
                  </button>
                </td>
              </tr>
              {openRows.includes(item.id) && item.subItems && (
                <>
                  {item.subItems.map((subItem) => (
                    <tr
                      key={subItem.id}
                      // className={`${theme === "dark" ? "bg-gray-100" : ""}`}
                    >
                      <td
                        className={`py-2 px-4 border-b text-center  ${
                          theme === "dark" ? "dark:text-white" : ""
                        }`}
                      >
                        {subItem.id}
                      </td>
                      <td
                        className={`py-2 px-4 border-b text-center  ${
                          theme === "dark" ? "dark:text-white" : ""
                        }`}
                      >
                        {subItem.code}
                      </td>
                      <td
                        className={`py-2 px-4 border-b text-center  ${
                          theme === "dark" ? "dark:text-white" : ""
                        }`}
                      >
                        {subItem.title}
                      </td>
                      <td
                        className={`py-2 px-4 border-b text-center  ${
                          theme === "dark" ? "dark:text-white" : ""
                        }`}
                      >
                        {subItem.description}
                      </td>
                      <td
                        className={`py-2 px-4 border-b text-center  ${
                          theme === "dark" ? "dark:text-white" : ""
                        }`}
                      >
                        {subItem.shortName}
                      </td>
                      <td
                        className={`py-2 px-4 border-b text-center  ${
                          theme === "dark" ? "dark:text-white" : ""
                        }`}
                      >
                        {subItem.parentId}
                      </td>
                      <td
                        className={`py-2 px-4 border-b text-center  ${
                          theme === "dark" ? "dark:text-white" : ""
                        }`}
                      >
                        {subItem.status}
                      </td>
                      <td
                        className={`py-2 px-4 border-b text-center  ${
                          theme === "dark" ? "dark:text-white" : ""
                        }`}
                      >
                        <button
                          className="bg-blue-500 text-white py-1 px-2 mr-2 rounded"
                          onClick={(e) => {
                            e.stopPropagation();
                            onEdit(item.id);
                          }}
                        >
                          Edit
                        </button>
                        <button
                          className="bg-red-500 text-white py-1 px-2 mr-2 rounded"
                          onClick={(e) => handleDeleteClick(e, item.id)}
                        >
                          Delete
                        </button>
                        <button
                          className="bg-green-500 text-white py-1 px-2 rounded"
                          onClick={(e) => {
                            e.stopPropagation();
                            onView(item.id);
                          }}
                        >
                          <FaRegEyeSlash />
                        </button>
                      </td>
                    </tr>
                  ))}
                </>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
      <DeleteModal
        isOpen={deleteItemId !== null}
        onClose={handleDeleteCancel}
        onDelete={handleDeleteConfirm}
      />
      <AddCodesModal
        isOpen={isAddModalOpen}
        onClose={closeAddModal}
        onAdd={handleAddCode}
      />
      <ViewCodesModal
        isOpen={viewItem.isOpen}
        onClose={() => setViewItem({ isOpen: false, item: {} })}
        item={viewItem.item}
      />
    </div>
  );
};

export default CodesTable;
