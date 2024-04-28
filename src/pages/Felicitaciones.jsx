import ticket from '../assets/Ticket.png'
import {useLocation} from 'react-router-dom'

export default function Felicitaciones(props) {
    const { state } = useLocation();
//   const { inputValue } = state;

return (
    <>
    <main id="felicitaciones">
    <section id="block">
        <h1>Comprar Ticket</h1>
    <h2>Felicitaciones</h2>
    <img src={ticket} />
    <h3 id="h3">Tu Entrada para la funcion 08/04/2024 <br></br> a las 14:00 hs ha sido canjeada</h3>
    <h3 id="h32">Te Esperamos!</h3>
    </section>
    </main>
    </>
)
}