import React, { useState, useEffect } from "react";
import "./views.css";

const Modal = ({ content }) => {
  const [openModal, setOpenModal] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    !isLoading && (
      <div className={openModal ? "modal-container" : "none"}>
        <div className="modal">
          <a onClick={() => setOpenModal(false)} className="close">
            X
          </a>
          <h2>{content}</h2>
        </div>
      </div>
    )
  );
};

export default Modal;
