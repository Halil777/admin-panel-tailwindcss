import React, { useState, useContext } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import DeleteModal from "../../common/deleteModal/DeleteModal";
import { ThemeContext } from "../../common/theme/ThemeContext";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

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
          type="button"
          className="text-white py-2 px-4 rounded bg-green-600 hover:bg-green-600"
          onClick={() => navigate("/add-code")}
        >
          Add Test
        </button>
      </div>
      <div className="overflow-x-auto w-full">
        <table
          className={`w-full  ${
            theme === "dark" ? "bg-light" : "bg-dark"
          } border border-gray-300`}
        >
          <thead>
            <tr>
              <th
                className={`py-2 w-16 px-4 border-b text-center  ${
                  theme === "dark" ? "dark:text-white" : ""
                }`}
              >
                ID
              </th>
              <th
                className={`py-2 px-4 w-40 border-b text-center  ${
                  theme === "dark" ? "dark:text-white" : ""
                }`}
              >
                {t("table.code")}
              </th>
              <th
                className={`py-2 px-4 w-48 border-b text-center  ${
                  theme === "dark" ? "dark:text-white" : ""
                }`}
              >
                {t("table.title")}
              </th>
              <th
                className={`py-2 px-4 w-48 border-b text-center  ${
                  theme === "dark" ? "dark:text-white" : ""
                }`}
              >
                {t("table.description")}
              </th>
              <th
                className={`py-2 px-4 border-b w-48 text-center   ${
                  theme === "dark" ? "dark:text-white" : ""
                }`}
              >
                {t("table.short_name")}
              </th>
              <th
                className={`py-2 px-4 border-b w-40 text-center  ${
                  theme === "dark" ? "dark:text-white" : ""
                }`}
              >
                {t("table.parent_id")}
              </th>
              <th
                className={`py-2 px-4 border-b w-40 text-center  ${
                  theme === "dark" ? "dark:text-white" : ""
                }`}
              >
                {t("table.status")}
              </th>
              <th
                className={` py-2 sticky top-0  z-10 px-4 border-b w-56 text-center  ${
                  theme === "dark" ? "dark:text-white" : ""
                }`}
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
                    className={`py-2 px-4 border-b text-center   ${
                      item.status === "table.active"
                        ? "text-green-400"
                        : item.status === "table.pending"
                        ? "text-yellow-400"
                        : "text-red-500"
                    }`}
                  >
                    {t(item.status)}
                  </td>
                  <td
                    className={`py-2 px-4   border-b  ${
                      theme === "dark" ? "dark:text-white" : ""
                    }`}
                  >
                    <div className="flex gap-3 justify-center ">
                      <button
                        className="bg-blue-500 text-white py-1 px-2 mr-2 rounded"
                        onClick={() => {
                          navigate("/edit-code");
                        }}
                      >
                        {t("table.edit")}
                      </button>
                      <button
                        className="bg-red-500 text-white py-1 px-2 mr-2 rounded"
                        onClick={(e) => handleDeleteClick(e, item.id)}
                      >
                        {t("table.delete")}
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
                          className={`py-2 px-4 border-b text-center  bg-yellow-100 dark:bg-red-300`}
                        >
                          {subItem.id}
                        </td>
                        <td
                          className={`py-2 px-4 border-b text-center  bg-yellow-100`}
                        >
                          {subItem.code}
                        </td>
                        <td
                          className={`py-2 px-4 border-b text-center  bg-yellow-100`}
                        >
                          {subItem.title}
                        </td>
                        <td
                          className={`py-2 px-4 border-b text-center  bg-yellow-100`}
                        >
                          {subItem.description}
                        </td>
                        <td
                          className={`py-2 px-4 border-b text-center  bg-yellow-100`}
                        >
                          {subItem.shortName}
                        </td>
                        <td
                          className={`py-2 px-4 border-b text-center  bg-yellow-100`}
                        >
                          {subItem.parentId}
                        </td>
                        <td
                          className={`py-2 px-4 border-b text-center  bg-yellow-100`}
                        >
                          {t(subItem.status)}
                        </td>
                        <td
                          className={`py-2 px-4 border-b text-center  bg-yellow-100`}
                        >
                          <button
                            className="bg-blue-500 text-white py-1 px-2 mr-2 rounded"
                            onClick={(e) => {
                              e.stopPropagation();
                              onEdit(item.id);
                            }}
                          >
                            {t("table.edit")}
                          </button>
                          <button
                            className="bg-red-500 text-white py-1 px-2 mr-2 rounded"
                            onClick={(e) => handleDeleteClick(e, item.id)}
                          >
                            {t("table.delete")}
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
