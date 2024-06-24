import { useState, useEffect, useCallback } from "react";

export function usePopup(ref: any) {
  const [isOpen, setIsOpen] = useState(false);

  const outSideClickHandler = useCallback((e: MouseEvent) => {
    if (!!ref && isOpen) {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
  }, [ref, isOpen]);

  useEffect(() => {
    if (!ref || !ref.current) return;
    if (isOpen) {
      window.addEventListener('click', outSideClickHandler);
    } else {
      window.removeEventListener('click', outSideClickHandler);
    }
  }, [ref, outSideClickHandler, isOpen]);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen(!isOpen);

  return {
    isOpen,
    open,
    close,
    toggle,
  };
}
