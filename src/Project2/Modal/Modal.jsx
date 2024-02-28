import React from "react";
import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

export const Modal = ({ isOpen, onClose, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <div className="grid place-items-center absolute top-0 left-0 h-screen w-screen z-40 backdrop-blur">
          <div className="relative z-50 m-auto max-h-[300px] max-w-[370px] bg-white p-4">
            <div className="flex justify-end">
              <AiOutlineClose onClick={onClose} className="text-2xl self-end" />
            </div>
            {children}
          </div>
        </div>
      )}
    </>,
    document.getElementById("modal-root")
  );
};
