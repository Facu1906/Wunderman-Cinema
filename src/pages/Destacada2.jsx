import { Link } from "react-router-dom";
import SociedadNieve from "../assets/Sociedad-Nieve.jpeg";
import arrowright from '../assets/arrow-right.png'
import arrowleft from '../assets/arrow-left.png'

export default function Destacada2 () {
    return (
        <>
        <header id="welcome-header2">
        <div id="welcome-header-content2">
          <Link id="titlewelcome"to="/"><h1>WUNDERMAN CINEMA</h1></Link>
            </div>
            <div id="buttons">
            <Link id="cta-link2" to="/cartelera">
            Cartelera
            </Link>
            </div>
            </header>

            <main id="destacada2">
          <section >
            <img
          src={SociedadNieve}
          alt="sociedad nieve"
          id="sociedad-nieve-destacada"
          />

          </section>
          <section>
            <h1> Society Of The Snow <br></br> <br></br> In 1972, a Uruguayan flight crashes in the remote heart of the Andes, forcing survivors to become each other's best hope.</h1>
            <div id="cta-link-des">
            <Link id="cta-link1-des" to="/youtubevideo2">
            Ver Trailer
            </Link>
            <Link id="cta-link2-des" to="/movie">
            Comprar Ticket
            </Link>
           </div>

        <div id="cta-link-others">
         <Link id="cta-link1-others" to="/destacada">
        <img
         src={arrowleft}
         alt="Arrow left"
         id="arrow-left"
         />
       </Link>
        <Link id="cta-link2-others" to="/destacada3">
        <img
         src={arrowright}
         alt="Arrow right"
         id="arrow-right"

        />
        </Link>
        </div>
          </section>
          </main>
              </>
              )
}