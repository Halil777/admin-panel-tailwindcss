import { FC } from "react";
import { useTranslation } from "react-i18next";

const Language: FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="flex items-center space-x-2 relative">
      <select
        id="languageSelect"
        className="px-2 py-1 border rounded-md outline-none cursor-pointer appearance-none"
        onChange={(e) => changeLanguage(e.target.value)}
        value={i18n.language}
      >
        <option value="en">EN</option>
        <option value="ru">Ру</option>
        <option value="tm">TM</option>
      </select>
    </div>
  );
};

export default Language;
