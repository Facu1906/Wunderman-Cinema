import { Link } from "react-router-dom";
import johnWick from "../assets/JohnWick.jpeg";

export default function WelcomeContent () {
    return (
      <>
      <header id="welcome-header2">
        <div id="welcome-header-content2">
          <Link id="titlewelcome"to="/"><h1>WUNDERMAN CINEMA</h1></Link>
            </div>
            <div id="buttons">
            <Link id="cta-link2" to="/destacada">
            Destacadas
            </Link>
          <Link id="cta-link2" to="/movie">
            Comprar Ticket
            </Link>
            </div>
            </header>
            
        <main id="welcome-content">
          <section>
              <h2>John Wick 4</h2>
            <img
          
            src={johnWick}
            alt="John Wick Movie"
            id="johnWick-image"
            />
           <Link id="cta-link3" to="/movie">
            Comprar Ticket
            </Link>
          </section>
  
          <section>
              <h2>John Wick 4</h2>
          <img
            src={johnWick}
            alt="John Wick Movie"
            id="johnWick-image"
            />
          <Link id="cta-link3" to="/movie">
            Comprar Ticket
            </Link>
          </section>
          <section >
              <h2>John Wick 4</h2>
          <img
  
            src={johnWick}
            alt="John Wick Movie"
            id="johnWick-image"
          />
       <Link id="cta-link3" to="/movie">
            Comprar Ticket
            </Link>
          </section>
          <section >
              <h2>John Wick 4</h2>
          <img
  
            src={johnWick}
            alt="John Wick Movie"
            id="johnWick-image"
          />
           <Link id="cta-link3" to="/movie">
            Comprar Ticket
            </Link>
          </section>
  
          <section>
              <h2>John Wick 4</h2>
          <img
  
            src={johnWick}
            alt="John Wick Movie"
            id="johnWick-image"
          />
           <Link id="cta-link3" to="/movie">
            Comprar Ticket
            </Link>
          </section>
  
          <section>
              <h2>John Wick 4</h2>
            <img
  
            src={johnWick}
            alt="John Wick Movie"
            id="johnWick-image"
            />
           <Link id="cta-link3" to="/movie">
            Comprar Ticket
            </Link>
          </section>
  
          <section>
              <h2>John Wick 4</h2>
          <img
  
            src={johnWick}
            alt="John Wick Movie"
            id="johnWick-image"
          />
           <Link id="cta-link3" to="/movie">
            Comprar Ticket
            </Link>
          </section>
          <section>
              <h2>John Wick 4</h2>
          <img
  
            src={johnWick}
            alt="John Wick Movie"
            id="johnWick-image"
          />
          <Link id="cta-link3" to="/movie">
            Comprar Ticket
            </Link>
          </section>

          <section>
              <h2>John Wick 4</h2>
          <img
  
            src={johnWick}
            alt="John Wick Movie"
            id="johnWick-image"
          />
          <Link id="cta-link3" to="/movie">
            Comprar Ticket
            </Link>
          </section>

          <section>
              <h2>John Wick 4</h2>
          <img
  
            src={johnWick}
            alt="John Wick Movie"
            id="johnWick-image"
          />
          <Link id="cta-link3" to="/movie">
            Comprar Ticket
            </Link>
          </section>
        </main>
        </>
      )
    }