import { Link } from "react-router-dom";
import johnWick from "../assets/JohnWick.jpeg";
import arrowright from '../assets/arrow-right.png'
import arrowleft from '../assets/arrow-left.png'

export default function Destacada () {
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

            <main id="destacada">
          <section >
            <img
          src={johnWick}
          alt="John Wick Movie"
          id="johnWick-destacada"
          />

          </section>
          <section>
            <h1>JOHN WICK <br></br> <br></br> With the price on his head ever increasing, legendary hit man John Wick takes his fight against the High Table global as he seeks out the most powerful players in the underworld, from New York to Paris to Japan to Berlin</h1>
            <div id="cta-link-des">
            <Link id="cta-link1-des" to="/youtubevideo">
            Ver Trailer
            </Link>
            <Link id="cta-link2-des" to="/movie">
            Comprar Ticket
            </Link>
            </div>

            <div id="cta-link-others">
            <Link id="cta-link1-others">
            <img
                 src={arrowleft}
                 alt="Arrow left"
                 id="arrow-left"
          />
            </Link>
            <Link id="cta-link2-others" to="/destacada2">
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