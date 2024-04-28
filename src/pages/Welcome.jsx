import { Link } from "react-router-dom";

import cinemaImg from "../assets/CinemaWelcome.jpeg";

export default function WelcomePage() {
  return (
    <>
      <header id="welcome-header">
        <div id="welcome-header-content">
          <h1>WUNDERMAN <br></br>CINEMA</h1>
          <Link id='cartelera' to="/cartelera">Cartelera</Link>
          <Link id="cta-link" to="/destacada">
            Destacadas
            </Link>
          <Link id="cta-link" to="/movie">
            Comprar Ticket
            </Link>
          </div>
        <img 
          src={cinemaImg}
          alt="Popcorn and glasses"
          id="cinema-image"
          />
          </header>
</>
          );
}

