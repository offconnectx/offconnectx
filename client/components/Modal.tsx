import React, { MouseEvent } from "react";

type ModalProps = {
  visible: boolean;
  onClose: () => void;
  content: string;
};

const Modal = ({ visible, onClose, content }: ModalProps) => {
  const handleOnClose = (e: MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).id === "container") onClose();
  };

  if (!visible) return null;

  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 bg-sky-400 bg-opacity-20 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="bg-sky-500 p-2 rounded">
        <p className=" text-white w-72 text-center justify text-lg">{content}</p>
        {/* <button onClick={onClose}>Close</button> */}
      </div>
    </div>
  );
};

export default Modal;
