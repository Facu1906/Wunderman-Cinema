import { Link } from "react-router-dom";
import Oppenheimer from "../assets/Oppenheimer.jpg";
import arrowright from '../assets/arrow-right.png'
import arrowleft from '../assets/arrow-left.png'

export default function Destacada3 () {
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

            <main id="destacada3">
          <section >
            <img
          src={Oppenheimer}
          alt="oppenherimer Movie"
          id="oppenheimer-destacada"
          />

          </section>
          <section>
            <h1>Oppenheimer <br></br> <br></br> During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J. Robert Oppenheimer to work on the top-secret Manhattan Project. Oppenheimer and a team of scientists spend years developing and designing the atomic bomb. Their work comes to fruition on July 16, 1945, as they witness the world's first nuclear explosion, forever changing the course of history.</h1>
            <div id="cta-link-des">
            <Link id="cta-link1-des" to="/youtubevideo3">
            Ver Trailer
            </Link>
            <Link id="cta-link2-des" to="/movie">
            Comprar Ticket
            </Link>
           </div>

        <div id="cta-link-others">
         <Link id="cta-link1-others" to="/destacada2">
        <img
         src={arrowleft}
         alt="Arrow left"
         id="arrow-left"
         />
       </Link>
        <Link id="cta-link2-others">
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