import { useSelector } from "react-redux";
import translations from "./translations";

export const useTranslation = () => {
  const language = useSelector((state) => state.settings.value.language);
  return (key) => {
    const entry = translations[key];
    if (!entry) return ""; // unknown key
    return entry[language] || ""; // unknown language
  };
};
