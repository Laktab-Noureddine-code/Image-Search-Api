import React, { useState } from "react";

function DropSrc({ src }) {
  const downloadImg = async (imgUrl, fileName) => {
    try {
      const response = await fetch(imgUrl);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const newLink = document.createElement("a");
      newLink.href = url;
      newLink.download = fileName;
      document.body.appendChild(newLink);
      newLink.click();

      document.body.removeChild(newLink);
      window.URL.revokeObjectURL(url);
      
    } catch (error) {
      console.log(error);
    }
  };
  const [selectedSrc, setSelectedSrc] = useState(null);
  return (
    <div className="dropdown-src">
      {Object.entries(src).map(([key, value], index) => {
        return (
          <li
            key={index}
            onClick={() => {
              setSelectedSrc((index) => index);
              downloadImg(value, `${key}-lakPics.jpg`);
            }}
          >
            {key}
            {index === selectedSrc ? <i className="ri-check-fill"></i> : null}
          </li>
        );
      })}
    </div>
  );
}

export default DropSrc;
