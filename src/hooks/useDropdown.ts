import { useCallback, useEffect, useState } from "react";
import useOutsideClick from "./useClickOutside";

export const useDropdown = (initialState: boolean = false) => {
  const [open, setOpen] = useState(initialState);
  const toggle = () => setOpen((currentCondition) => !currentCondition);
  const outsideClickCallback = () => {
    if (open) {
      toggle();
    }
  };
  const ref = useOutsideClick(outsideClickCallback);

  const escapeListener = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      toggle();
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keyup", escapeListener);

    return () => {
      document.removeEventListener("keyup", escapeListener);
    };
  }, []);

  return { open, toggle, ref };
};
