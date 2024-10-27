import { useState } from "react";
import "./style.css";
const types = [
  { id: 1, icon: "ri-landscape-fill", type: "Photos" },
  { id: 2, icon: "ri-video-line", type: "Videos" },
];
export default function Header({ onInputChange, onSearch }) {
  const [inputValue, setInputValue] = useState("");
  const [contentTypes, setContentsTypes] = useState(types);
  const [chosingType, setChosingType] = useState(1);
  const content = contentTypes.find((type) => type.id == chosingType);
  console.log(content);
  function handleChange(e) {
    const newValue = e.target.value;
    setInputValue(newValue);
    onInputChange(newValue);
  }
  return (
    <div className="header">
      <div className="logo">
        <h1>Pixels</h1>
      </div>
      <div className="search-bar">
        <div className="search-type">
          <div className="main-type">
            <button>
              <i className={content.icon}></i>{content.type}
            </button>
          </div>
          <div className="chose-type">
            {contentTypes.map((type) => {
              return (
                <button
                  onClick={() => {
                    setChosingType(type.id);
                  }}
                >
                  <i className={type.icon}></i>
                  {type.type}
                </button>
              );
            })}
            {/* <button
              onClick={() => {
                setChosingType(1);
              }}
            >
              <i className="ri-landscape-fill"></i>Photos
            </button>
            <button
              onClick={() => {
                setChosingType(1);
              }}
            >
              <i className="ri-video-line"></i>Videos
            </button> */}
          </div>
        </div>
        <div className="search-input">
          <input
            value={inputValue}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <button
            onClick={() => {
              onSearch(inputValue);
            }}
          >
            <i className="ri-search-2-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
