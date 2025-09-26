import { useSelector } from "react-redux";
import translations from "./translations";

export const useTranslation = () => {
  const language = useSelector((state) => state.settings.value.language);
  return (key) => translations[key][language];
};
