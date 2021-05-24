import Axios from "axios";
import React, { useState } from "react";

const Newsletter = (props) => {
  const urlSubscriber = "https://corebiz-test.herokuapp.com/api/v1/newsletter";
  /* CADASTTRO DE USUARIO NA NEWSLETTER */
  const [registered, setRegistered] = useState(false);

  /* ESTADOS PARA VALIDAÇÃO DOS CAMPOS VAZIOS */
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const sendForm = (e) => {
    e.preventDefault();

    const form = document.forms.registration;
    const { name, email } = form;

    /* ENVIO DOS DADOS DO ASSINANTE */
    Axios.post(urlSubscriber, { name: name.value, email: email.value })
      .then((resp) => {
         /* SUCESSO DA REQUISIÇÃO */
        setRegistered(true);

      })
      .catch((error) => {
        //console.log(error.response.status);
        
        /* VALIDAÇÃO DO FORM */
        name.value === "" ? setName("Preencha com seu nome completo") : setName("");
        email.value === "" ? setEmail("Preencha com um e-email válido") : setEmail("");
        
      });
  };

  /*    RENDERIZAÇÃO CONDICIONAL
        CASO DE SUCESSO AO ENVIAR O DADOS, O COMPONENTE SERÁ RENDERIZADO CAINDO NESSE IF
  */
  if (registered) {
    return (
      <section className="newsletter-area">
        <div className="news registered">
          <header>
            <h2>Seu e-mail foi cadastrado com sucesso!</h2>
            <span>
              A partir de agora você receberá as novidades e ofertas exclusivas
            </span>
          </header>
          <button
            onClick={() => {
              setRegistered(false);
              setName("");
              setEmail("");
            }}
          >
            Cadastrar novo e-mail
          </button>
        </div>
      </section>
    );
  }
  /* INICIO DO COMPONENTE */
  return (
    <section className="newsletter-area">
      <div className="news">
        <header>
          <h2>Participe de nossas news com promoções e novidades!</h2>
        </header>
        <form name="registration" onSubmit={(e) => sendForm(e)}>
          <div>
            <div className="label-newsletter">
              <input
                type="text"
                name="name"
                className={name != "" ? "form-error" : ""}
                placeholder="Digite seu nome"
              />
              <span className="error">{name}</span>
            </div>
            <div className="label-newsletter">
              <input
                type="email"
                name="email"
                className={email != "" ? "form-error" : ""}
                placeholder="Digite seu email"
              />
              <span className="error">{email}</span>
            </div>
          </div>
          <button>Eu quero!</button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
