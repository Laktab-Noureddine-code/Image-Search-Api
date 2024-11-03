import React, { useContext, useState } from "react";
import "./style.css";
import { createPortal } from "react-dom";
import { openModals } from "../index.js";
import DropSrc from "./DropSrc.jsx";

export default function PhotoModal() {
  const [openDownload, setOpenDownload] = useState(false);
  const { openModal, setOpenModal, selectedPhoto, setSelectedPhoto } =
    useContext(openModals);
  console.log(selectedPhoto);
  if (!openModal || !selectedPhoto || openModal !== selectedPhoto.id)
    return null;
  // console.log(selectedPhoto.id)
  return createPortal(
    <div className="modal">
      <div
        className="modal-overlay"
        onClick={() => {
          setOpenModal(null);
          setSelectedPhoto(null);
        }}
      ></div>
      <div className="modal-content">
        <div className="modal-header">
          <div className="left-header">
            <i className="ri-camera-lens-fill"></i>
            {selectedPhoto.photographer}
          </div>
          <div className="right-header">
            <div className="download-btn">
              <button>Free download</button>
              <ul className="photo-src">
                <i
                  className="ri-arrow-down-s-line"
                  onClick={() => setOpenDownload(!openDownload)}
                ></i>
                {openDownload ? <DropSrc src={selectedPhoto.src} /> : null}
              </ul>
            </div>
            <button
              className="close-btn"
              onClick={() => {
                setOpenModal(null);
                setSelectedPhoto(null);
              }}
            >
              &times;
            </button>
          </div>
        </div>
        <div className="modal-main">
          <img src={selectedPhoto.src.large} alt={selectedPhoto.alt} />
        </div>
      </div>
    </div>,
    document.body
  );
}
