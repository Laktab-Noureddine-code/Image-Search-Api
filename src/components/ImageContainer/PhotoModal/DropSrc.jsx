import React, { useState } from "react";

function DropSrc({ src }) {
  const [selectedSrc, setSelectedSrc] = useState(null);
  return (
    <div className="dropdown-src">
      {Object.entries(src).map(([key, value], index) => {
        return (
          <li key={index} onClick={() => setSelectedSrc(index => index)}>
            <a href={value} download={key + ".jpg"}>
              {key}
            </a>
            {index === selectedSrc ? <i className="ri-check-fill"></i> : null}
          </li>
        );
      })}
    </div>
  );
}

export default DropSrc;
