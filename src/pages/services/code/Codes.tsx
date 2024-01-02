import { FC } from "react";
import CodesTable from "../../../components/services/code/CodesTable";

const generateRandomCode = () => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const codeLength = 6;
  let randomCode = "#";
  for (let i = 0; i < codeLength; i++) {
    randomCode += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return randomCode;
};

const generateRandomData = () => {
  const numberOfItems = 4;
  const numberOfSubItems = 7;

  const generateRandomSubItems = () => {
    const subItems = [];
    for (let j = 0; j < numberOfSubItems; j++) {
      subItems.push({
        id: Math.floor(Math.random() * 1000),
        code: generateRandomCode(),
        title: `SubItem Title ${j + 1}`,
        description: `SubItem Description ${j + 1}`,
        shortName: generateRandomCode(),
        parentId: 1,
      });
    }
    return subItems;
  };

  const data = [];
  for (let i = 0; i < numberOfItems; i++) {
    data.push({
      id: Math.floor(Math.random() * 1000),
      code: generateRandomCode(),
      title: `Example Title ${i + 1}`,
      description: "Lorem ipsum",
      shortName: generateRandomCode(),
      parentId: 0,
      subItems: generateRandomSubItems(),
    });
  }

  return data;
};

const Codes: FC = () => {
  const tableData = generateRandomData();

  const handleEdit = (id: number) => {
    console.log(`Edit item with ID ${id}`);
  };

  const handleDelete = (id: number) => {
    console.log(`Delete item with ID ${id}`);
  };

  const handleView = (id: number) => {
    console.log(`View item with ID ${id}`);
  };

  return (
    <div className="min-h-screen">
      <CodesTable
        data={tableData}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onView={handleView}
      />
    </div>
  );
};

export default Codes;
