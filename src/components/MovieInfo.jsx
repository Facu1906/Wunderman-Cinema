import { useContext, useRef, useState } from "react";
import { Context } from "../store/Context.jsx";
import Modal from "./Modal.jsx";
import { Link } from "react-router-dom";


export default function MovieInfo({ onDone }) {
  const title = useRef();
  const description = useRef();
  const deadline = useRef();


  const { movieInformation } = useContext(Context);

  function handleSubmit(event) {
    event.preventDefault();
    const challenge = {
      title: title.current.value,
      description: description.current.value,
      deadline: deadline.current.value,
    };

    if (
      !challenge.title.trim() ||
      !challenge.description.trim() ||
      !challenge.deadline.trim()
    ) {
      return;
    }

    onDone();
    movieInformation(challenge);
  }

  return (
    <Modal title="Comprar Ticket" >
      <form id="new-information" onSubmit={handleSubmit} >
        <p>
          <label htmlFor="title">Seleccione Pelicula</label>
          <textarea ref={title} type="text" name="title" id="title">John Wick 4</textarea>
        </p>
        <p>
          <label htmlFor="deadline">Seleccione Funcion</label>
          <input ref={deadline} type="date" name="deadline" id="deadline" />
        </p>
        <p>
          <label htmlFor="description">Seleccione Asiento</label>
          <textarea ref={description} name="description" id="description">Fila-1 Asiento-1</textarea>
        </p>

        <p className="new-information-actions">
          <Link to="/cartelera" id="buttons1">
            Cancel
          </Link>
          <Link to="/datos" id="buttons2">Comprar Ticket</Link>
        </p>
      </form>
    </Modal>
  );
}
