import { useCallback, useEffect, useState } from "react";
import useOutsideClick from "./useClickOutside";

export const useDropdown = (initialState: boolean = false) => {
  const [open, setOpen] = useState<boolean>(initialState);
  const [disabled, setDisabled] = useState<boolean>(false);
  const toggle = () => setOpen((currentCondition) => !currentCondition);
  const outsideClickCallback = () => {
    if (open && !disabled) {
      toggle();
    }
  };
  const ref = useOutsideClick(outsideClickCallback);

  const escapeListener = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keyup", escapeListener);

    return () => {
      document.removeEventListener("keyup", escapeListener);
    };
  }, []);

  return { open, toggle, ref, setDisabled };
};
