import { FormEvent, useState } from "react";
import imageTop from "../../assets/talk-top.svg";
import imagePerson from "../../assets/talk-person.svg";
import { TalkContainer } from "./styles";
import emailjs from '@emailjs/browser'

export const TalkToUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function senEmail(e: FormEvent){
    e.preventDefault();

    if(name == '' || email == '' || message === ''){
      alert("Preencha todos os campos!");
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    }

    emailjs.send("service_4ff6h28", "template_dn0pylm", templateParams, "q6Wnyuw01CYMqkb2b")
    .then((response) => {
      console.log("Enviado com sucesso", response.status, response.text);
      setName('');
      setEmail('');
      setMessage('');
    }, (error) => {
      console.log("Error: ", error);
    });

  }

  return (
    <TalkContainer topImage={imageTop} id="cadastro">
      <div className="imgTop" />
      <div className="content">
        <div className="left">
          <h1>Fale conosco</h1>
          <p>
            Precisando de um empurrãozinho pra começar a se exercitar? Conta com a gente! A 
            <span> FitShare</span> está aqui para te acompanhar em cada passo da sua jornada.
          </p>
          <img src={imagePerson} alt="" />
        </div>
        <div className="right">
          <form className="form" onSubmit={senEmail}>
            <label htmlFor="name">Nome</label>
            <input
              id="name"
              className="input"
              type="text"
              placeholder="Seu nome"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />

            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              className="input"
              type="text"
              placeholder="Seu e-mail"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />

            <label htmlFor="message">Mensagem</label>
            <textarea
              id="message"
              className="textarea"
              placeholder="Sua mensagem"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />

            <input className="button" type="submit" value="Enviar" />
          </form>
        </div>
      </div>
    </TalkContainer>
  );
};
