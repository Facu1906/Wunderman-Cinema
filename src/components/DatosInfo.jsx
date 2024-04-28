import { useContext, useRef, useState } from "react";
import { Context } from "../store/Context.jsx";
import Modal from "./Modal.jsx";
import { Link, useNavigate } from "react-router-dom";


export default function DatosInfo() {
  // const title = useRef();
  // const description = useRef();
  // const deadline = useRef();

  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    navigate('/felicitaciones', { state: { inputValue } });
  };

  // const { submitInformation } = useContext(Context);

  // function handleSubmitT(event) {
  //   event.preventDefault();
  //   const information = {
  //     title: title.current.value,
  //     description: description.current.value,
  //     deadline: deadline.current.value,
  //   };
  // }

    // if (
    //   !information.title.trim() ||
    //   !information.description.trim() 
    // ) {
    //   return;
    // }

    // submitInformation(information);
  

  return (
    <Modal title="Completa tu Informacion Personal" >
      <form id="new-information" >
        <p>
          <label htmlFor="title">Nombre Completo</label>
          <input  type="text" name="title" id="title" value={inputValue} onChange={handleInputChange}/>
        </p>
        <p>
          <label htmlFor="title">E-mail</label>
          <input type="text" name="title" id="title" />
        </p>
        <p>
          <label htmlFor="description">Telefono</label>
          <textarea  name="description" id="description" />
        </p>

        <p className="new-information-actions">
          <Link to="/cartelera" id="buttons4">
            Cancel
          </Link>
          <Link  id="buttons3" onClick={handleSubmit}>Finalizar</Link>
        </p>
      </form>
    </Modal>
  );
}