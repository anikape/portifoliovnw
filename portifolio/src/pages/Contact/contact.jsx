import React, { useState } from 'react';
import headphoneEmoji from './public/images/emoji-headphone.png'; // Certifique-se de que o caminho para a imagem está correto

const FormContainer = () => {
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const status = document.getElementById("my-form-status");

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatusMessage("Sua mensagem foi enviada com sucesso!");
        form.reset();
      } else {
        const data = await response.json();
        if (data && data.errors) {
          setStatusMessage(data.errors.map(error => error.message).join(", "));
        } else {
          setStatusMessage("Não foi possível enviar a sua solicitação.");
        }
      }
    } catch (error) {
      setStatusMessage("Não foi possível enviar a sua solicitação.");
    }
  };

  return (
    <section className="formContainer">
      <figure className="phone">
        <img src={headphoneEmoji} alt="Emoji de fone de ouvido" />
      </figure>

      <form
        id="myForm"
        action="https://formspree.io/f/meqbkddq"
        method="POST"
        target="_blank"
        onSubmit={handleSubmit}
      >
        <div className="formContent">
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" name="_replyto" placeholder="Informe seu e-mail" />
        </div>

        <div className="formContent">
          <label htmlFor="message">Mensagem</label>
          <textarea id="message" name="message" />
        </div>

        <button id="my-form-button" type="submit" className="submit">
          Enviar
        </button>

        <p id="my-form-status">{statusMessage}</p>
      </form>
    </section>
  );
};

export default FormContainer;
