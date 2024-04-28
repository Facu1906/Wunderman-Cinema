import { useState } from "react";
import { Link } from "react-router-dom";

import RellenarDatos from "./DatosInfo.jsx";

export default function YourData() {
  const [isCreatingNewInformation, setIsCreatingNewInformation] = useState();

  function handleStartAddNewInformation() {
    setIsCreatingNewInformation(true);
  }

  function handleDone() {
    setIsCreatingNewInformation(false);
  }

  return (
    <>
      <RellenarDatos onDone={handleDone} />
      
    <main>
    <section id="yourdata">
    </section>
    </main>
    </>
  );
}