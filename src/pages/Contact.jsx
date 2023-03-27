import React, { useState } from "react";
import emailjs from "@emailjs/browser";

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (name === "" || email === "" || message === "") {
      alert("Preencha todos os campos!");
      return;
    }

    const templateParams = {
      from_name: name,
      email: email,
      message: message,
    };

    emailjs
      .send(
        "service_l6ktg6d",
        "template_h16lfo4",
        templateParams,
        "9COV6ThQxzVkEYsNq"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);

        setName("");
        setEmail("");
        setMessage("");
      });
  };

  return (
    <div>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl text-center font-bold mb-4">
          Entre em Contato
        </h1>
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-white rounded-lg shadow-md p-8"
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Nome:
            </label>
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              className="w-full px-3 py-2 border rounded-lg text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email:
            </label>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full px-3 py-2 border rounded-lg text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 font-bold mb-2"
            >
              Mensagem:
            </label>
            <textarea
              value={message}
              onChange={handleMessageChange}
              className="w-full px-3 py-2 border rounded-lg text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
