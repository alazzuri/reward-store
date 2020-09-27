import { useEffect, useRef } from "react";

type Callback = (e: MouseEvent) => void;

interface useOutsideClick {
  callback: Callback;
}

const useOutsideClick = <T extends HTMLDivElement>(callback: Callback) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) {
        callback(e);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () =>
      document.removeEventListener("click", handleClickOutside, true);
  }, [callback, ref]);

  return ref;
};

export default useOutsideClick;
