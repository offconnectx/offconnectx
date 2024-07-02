import React from "react";

const Modal = ({visible}) => {
    if (!visible) return null;
    return (
        <div className="fixed inset-0 bg-sky-400 bg-opacity-20 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-white p-2 rounded ">Modal</div>
        </div>

    );
};

export default Modal;