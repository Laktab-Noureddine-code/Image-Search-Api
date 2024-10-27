import { useRef, useState } from "react";
import "./style.css";
const types = [
  { id: 1, icon: "ri-landscape-fill", type: "Photos" },
  { id: 2, icon: "ri-video-line", type: "Videos" },
];
export default function Header({ onInputChange, onSearch }) {
  const [inputValue, setInputValue] = useState("");
  const [contentTypes, setContentsTypes] = useState(types);
  const [chosingType, setChosingType] = useState(1);
  const [displayTypes, setDisplayTypes] = useState(false);
  const content = contentTypes.find((type) => type.id === chosingType);

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
            <button
              onMouseOver={() => {
                setDisplayTypes(true);
              }}
            >
              <i className={content.icon}></i>
              {content.type}
            </button>
          </div>
          <div className="chose-type">
            {displayTypes
              ? contentTypes.map((type) => {
                  return (
                    <button
                      key={type.id}
                      onClick={() => {
                        setChosingType(type.id);
                        setDisplayTypes(false)
                      }}
                    >
                      <i className={type.icon}></i>
                      {type.type}
                    </button>
                  );
                })
              : null}
          </div>
        </div>
        <div className="search-input">
          <input
          placeholder="Search for free photos & videos"
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
