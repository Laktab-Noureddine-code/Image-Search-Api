import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/index";
import ImageContainer from "./components/ImageContainer/index.js";

function App() {
  // ceci est un état qui enregistre les valeurs qui viennent de l'en-tête (barre de recherche)
  // const [searchBarValue, setSearchBarValue] = useState("");
  const [imagesData, setImagesData] = useState([]);
  const [videosData, setVideosData] = useState([]);
  const [contentType, setContentsType] = useState("Photos");
  // ici je stocke ma clé API
  const myKey = "pXNI9HvH3D82yh2tQPJsJWBfykcZRX0pc37vtm9Sv3DwGsptnHa3RcjG";

  // une fonction asynchrone pour récupérer les données de l'API
  async function searchImage(query, perPage = 15, page = 2) {
    try {
      // 'await' suspend l'exécution de la fonction jusqu'à ce que la promesse fetch soit résolue
      const response = await fetch(
        `https://api.pexels.com/v1/search?query=${query}&per_page=${perPage}&page=${page}`,
        {
          method: "GET",
          headers: {
            Authorization: myKey,
          },
        }
      );
      // vérifier si la réponse est OK
      if (!response.ok) {
        throw new Error("something went worng");
      }
      // attendre l'analyse de la réponse JSON, qui est également asynchrone
      const jsonImageDate = await response.json();
      setImagesData(jsonImageDate);
    } catch (error) {
      console.log(error);
    }
  }
  function handleScroll(){
    let height = document.documentElement.scrollHeight
    let top = document.documentElement.scrollTop;
    let window_height = window.innerHeight;
    let result = window_height+top + 1
    // if(result > height){
    //   setImagesData(prev=>prev.)
    // }

  }
  useEffect(()=>{
    window.addEventListener('scroll' ,handleScroll)
  })
  async function searchVideo(query, perPage = 15, page = 1) {
    try {
      const responce = await fetch(
        `https://api.pexels.com/videos/search?query=${query}&per_page=${perPage}&page=${page}`,
        {
          method: "GET",
          headers: {
            Authorization: myKey,
          },
        }
      );

      if (!responce.ok) {
        throw new Error("something went wrong");
      }

      const jsonVideoData = await responce.json();
      setVideosData(jsonVideoData);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    searchImage("nature");
  }, []);

  function onTypeChange(type) {
    setContentsType(type);
  }

  function onSearch(query, type) {
    if (type === "Photos") {
      searchImage(query);
    } else {
      searchVideo(query);
    }
  }

  return (
    <div className="App">
      <Header
        onSearch={onSearch}
        onTypeChange={onTypeChange}
      />

      <ImageContainer
        type={contentType}
        data={contentType === "Photos" ? imagesData : videosData}
      />
    </div>
  );
}

export default App;
