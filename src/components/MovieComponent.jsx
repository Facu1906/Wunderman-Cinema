import { useState } from "react";
import { Link } from "react-router-dom";

import MovieInfo from "./MovieInfo.jsx";

export default function SelectMovie() {
  const [isCreatingNewInformation, setIsCreatingNewInformation] = useState();

  function handleStartAddNewInformation() {
    setIsCreatingNewInformation(true);
  }

  function handleDone() {
    setIsCreatingNewInformation(false);
  }

  return (
    <>
<main id="moviecomponent">
      <MovieInfo onDone={handleDone} />
      <header id="welcome-header2">
        <div id="welcome-header-content2">
          <Link id="titlewelcome"to="/"><h1>WUNDERMAN CINEMA</h1></Link>
            </div>
      </header>
</main>
    </>
  );
}
         
