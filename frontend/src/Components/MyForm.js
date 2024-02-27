import React, { useState } from "react";
import '../App.css';

const ContactForm = () => {
  const [status, setStatus] = useState("Absenden");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Gesendet...");
    const { name, email, phone, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      phone: phone.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <div className="formcontainer">
    <h2>KONTAKT</h2>
    <form onSubmit={handleSubmit}>
    <div>
      <div className="formline">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" required />
      </div>
      <div  className="formline">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" placeholder="mail@mail.com" required />
      </div>
      <div  className="formline">
        <label htmlFor="phone">Telefonnumer:</label>
        <input type="phone" id="phone" placeholder="+49" required />
      </div>
      <div  className="formline">
        <label htmlFor="message">Message:</label>
        <textarea id="message" required />
      </div>
      </div>

      <div className="btncontactcontainer">
      <button className="btncontact" type="submit" onClick={() => window.location = 'mailto:tanyavolyn@gmail.com'}>{status}</button>
      </div>

    </form>
    </div>
  );
};

export default ContactForm;