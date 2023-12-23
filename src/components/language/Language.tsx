import { FC } from "react";
import { useTranslation } from "react-i18next";

const Language: FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="flex items-center space-x-2">
      <select
        id="languageSelect"
        className="px-2 py-1 border rounded-md outline-none cursor-pointer"
        onChange={(e) => changeLanguage(e.target.value)}
        value={i18n.language}
      >
        <option value="en">
          <div className="flex items-center space-x-10">
            English <img src="./us.svg" alt="" />
          </div>
        </option>
        <option value="ru">
          Русский <img src="./ru.svg" alt="" />
        </option>
        <option value="tm">
          Türkmençe <img src="./uk.svg" alt="" />
        </option>
      </select>
    </div>
  );
};

export default Language;
