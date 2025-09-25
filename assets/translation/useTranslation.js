import { useSelector } from "react-redux";
import translations from "./translations";

export const useTranslation = () => {
  const language = useSelector((state) => state.language.value.code);
  return (key) => translations[key][language];
};
