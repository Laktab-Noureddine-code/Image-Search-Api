import { useState } from "react";
import "./style.css";
import { createPortal } from "react-dom";
import PhotoModal from "./PhotoModal/PhotoModal";
export default function ImageContainer({ data, type }) {
  const [openModal, setOpenModal] = useState(null);

  let content = "";
  if (type === "Photos" && data && data.photos && data.photos.length > 0) {
    content = (
      <div className="grid-container">
        {data.photos.map((photo, index) => {
          return (
            <div
              className="photo"
              key={photo.id}
              onClick={() => setOpenModal(index)}
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
                <PhotoModal data={photo} index={index} open={openModal === index} onClose={()=>setOpenModal(null)}/>
              </div>
            </div>
          );
        })}
      </div>
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
