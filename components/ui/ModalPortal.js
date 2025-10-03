import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

export default function ModalPortal({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const el = document.getElementById("modals");
  return el ? ReactDOM.createPortal(children, el) : null;
}
