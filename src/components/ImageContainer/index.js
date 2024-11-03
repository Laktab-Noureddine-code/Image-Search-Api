import { createContext, useEffect, useState } from "react";
import "./style.css";
import PhotoModal from "./PhotoModal/PhotoModal";

export const openModals = createContext(null);

export default function ImageContainer({ data, type }) {
  // const [isOpen, setIsOpen] = useState(null);
  const [openModal, setOpenModal] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handleOpen = (photo) => {
    setOpenModal(photo.id);
    setSelectedPhoto(photo);
  };

  let content = "";
  if (type === "Photos" && data && data.photos && data.photos.length > 0) {
    content = (
      <openModals.Provider
        value={{ openModal, setOpenModal, selectedPhoto, setSelectedPhoto }}
      >
        <div className="grid-container">
          {data.photos.map((photo) => {
            return (
              <div
                className="photo"
                key={photo.id}
                onClick={() => handleOpen(photo)}
              >
                <img src={photo.src.large} alt={photo.alt} />
                <div className="photo-info">
                  <div className="top-info">
                    <p className="size">
                      {photo.width} x {photo.height} px
                    </p>
                    <button className="save-button">
                      <i className="ri-bookmark-line"></i>
                    </button>
                  </div>
                  <div className="bottom-info">
                    <div className="photographer">
                      <i className="ri-camera-lens-fill"></i>
                      {photo.photographer}
                    </div>
                    <button className="download-button">
                      <i className="ri-download-line"></i>Download
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
          <PhotoModal />
        </div>
      </openModals.Provider>
    );
  } else if (
    type === "Videos" &&
    data &&
    data.videos &&
    data.videos.length > 0
  ) {
    content = (
      <div className="grid-container">
        {data.videos.map((video) => {
          return (
            <div className="Videos" key={video.id}>
              <video controls>
                <source src={video.video_files[0].link} type="video/mp4" />
              </video>
            </div>
          );
        })}
      </div>
    );
  }

  return content;
}
