import { useState } from "react";
import "./App.css";
import Header from "./components/header/index";
// import ImageContainer from "./components/ImageContainer/index";

function App() {
  // ceci est un état qui enregistre les valeurs qui viennent de l'en-tête (barre de recherche)
  const [searchBarValue, setSeachBarValue] = useState("");

  // ici je stocke ma clé API
  const myKey = "pXNI9HvH3D82yh2tQPJsJWBfykcZRX0pc37vtm9Sv3DwGsptnHa3RcjG";

  // une fonction asynchrone pour récupérer les données de l'API
  async function searchImage(query, perPage = 15, page = 1) {
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
        throw new Error("somethign went worng");
      }
      // attendre l'analyse de la réponse JSON, qui est également asynchrone
      const data = await response.json();

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  // cette fonction est changer la valeur de searchBarValue
  function handleChange(value) {
    setSeachBarValue(value);
  }

  return (
    <div className="App">
      <Header onInputChange={handleChange} onSearch={searchImage} />
      {/* <ImageContainer /> */}
    </div>
  );
}

export default App;