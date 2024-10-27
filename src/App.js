import { useState } from "react";
import "./App.css";
import Header from "./components/header/index";
// import ImageContainer from "./components/ImageContainer/index";

function App() {
  const [searchBarValue, setSeachBarValue] = useState("");
  const myKey = "pXNI9HvH3D82yh2tQPJsJWBfykcZRX0pc37vtm9Sv3DwGsptnHa3RcjG";

  async function searchImage(query, perPage = 15, page = 1) {
    await fetch(
      `https://api.pexels.com/v1/search?query=${query}&per_page=${perPage}&page=${page}`,
      {
        method: "GET",
        headers: {
          Authorization: myKey,
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }
  function handleChange(value) {
    setSeachBarValue(value);
  }
  return (
    <div className="App">
      <Header onInputChange={handleChange} onSearch={searchImage}/>
      {/* <ImageContainer /> */}
    </div>
  );
}

export default App;
