import React, { useState, useContext } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import DeleteModal from "../../common/deleteModal/DeleteModal";
import { ThemeContext } from "../../common/theme/ThemeContext";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { MdOutlineModeEdit } from "react-icons/md";

interface SubItem {
  id: number;
  code: string;
  title: string;
}

interface TableProps {
  data: {
    id: number;
    code: string;
    title: string;
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

  const { t } = useTranslation();
  const navigate = useNavigate();

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
      className={`py-10 ${
        theme === "dark" ? "bg-light text-dark" : "bg-dark text-light"
      } rounded-2xl shadow-lg dark:bg-gray-800 dark:shadow-2xl bg-white`}
    >
      <div
        className={`px-10 flex justify-between align-center mb-5 ${
          theme === "dark" ? "dark:text-white" : ""
        }`}
      >
        <span className="dark:text-white text-2xl">Codes Table</span>
        <button
          type="button"
          className="py-2 px-4 rounded border border-gray-400 text-gray-400 dark:text-white dark:border-white"
          onClick={() => navigate("/add-code")}
        >
          + Add Test
        </button>
      </div>
      <div className="overflow-x-auto w-full">
        <table
          className={`w-full  ${
            theme === "dark" ? "bg-light" : "bg-dark"
          } border border-gray-300 border-r-0 border-l-0 `}
        >
          <thead className="dark:bg-gray-800 bg-gray-50 dark:text-white">
            <tr>
              <th className={`py-2 px-10 w-40 border-b text-start  `}>
                {t("table.code")}
              </th>
              <th className={`py-2 px-4 w-48 border-b text-center  `}>
                {t("table.title")}
              </th>

              <th
                className={` py-2 sticky top-0  z-10  border-b w-56 text-end pr-24  `}
              >
                {t("table.actions")}
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <React.Fragment key={item.id}>
                <tr
                  className={`${
                    openRows.includes(item.id) ? "bg-gray-400" : ""
                  }`}
                  style={{ cursor: "pointer" }}
                  onClick={(e) => handleRowClick(e, item.id)}
                >
                  <td
                    className={`py-2 px-10 border-b text-start  ${
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
                    className={`py-2 px-10   border-b  ${
                      theme === "dark" ? "dark:text-white" : ""
                    }`}
                  >
                    <div className="flex gap-3 justify-end ">
                      <button
                        className="bg-blue-500 text-white py-1 px-2 mr-2 rounded"
                        onClick={() => {
                          navigate("/edit-code");
                        }}
                      >
                        <MdOutlineModeEdit />
                      </button>
                      <button
                        className="bg-red-500 text-white py-1 px-2 mr-2 rounded"
                        onClick={(e) => handleDeleteClick(e, item.id)}
                      >
                        <MdDelete />
                      </button>
                      <button
                        title="View All  Details"
                        className="bg-green-500 text-white py-1 px-2 rounded"
                        onClick={() => navigate("/view-code")}
                      >
                        <FaRegEyeSlash />
                      </button>
                    </div>
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
                          className={`py-2 px-10 border-b text-start  bg-yellow-100`}
                        >
                          {subItem.code}
                        </td>
                        <td
                          className={`py-2 px-4 border-b text-center  bg-yellow-100`}
                        >
                          {subItem.title}
                        </td>

                        <td
                          className={`py-2 px-10 border-b text-end  bg-yellow-100`}
                        >
                          <button
                            className="bg-blue-500 text-white py-1 px-2 mr-2 rounded"
                            onClick={(e) => {
                              e.stopPropagation();
                              onEdit(item.id);
                            }}
                          >
                            <MdOutlineModeEdit />
                          </button>
                          <button
                            className="bg-red-500 text-white py-1 px-2 mr-2 rounded"
                            onClick={(e) => handleDeleteClick(e, item.id)}
                          >
                            <MdDelete />
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
      </div>
      <DeleteModal
        isOpen={deleteItemId !== null}
        onClose={handleDeleteCancel}
        onDelete={handleDeleteConfirm}
      />
    </div>
  );
};

export default CodesTable;
