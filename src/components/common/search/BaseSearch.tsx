import { FC, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useTranslation } from "react-i18next";

const BaseSearch: FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="relative">
      <input
        type="text"
        placeholder={t("sidebar.search")}
        className={`border hidden md:block rounded-md py-2 px-4 transition-all duration-300 focus:outline-none focus:border-blue-500`}
        style={{ width: isExpanded ? "400px" : "300px" }}
        onClick={() => setIsExpanded(true)}
        onBlur={() => setIsExpanded(false)}
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <AiOutlineSearch />
      </div>
    </div>
  );
};

export default BaseSearch;
