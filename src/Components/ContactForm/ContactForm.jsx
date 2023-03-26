import React, { useState } from "react";
import "./ContactForm.css";
const ContactForm = () => {
  const handleSend=(e)=>{
    const [email,setEmail]=useState("")
    const [name,setName]=useState("")
    const [phone,setPhone]=useState(null )
    const [category,setCategory]=useState("")

    e.preventDefault()
    alert
  }
  return (
    <section className="ContactSection">
      <form className="ContactForm" onSubmit={handleSend}>
        <fieldset>
          <legend>Contact Us</legend>
          <p>
            <label>Email *</label>
            <input onChange={e=>setEmail(e.target.value)} required type="email" placeholder="Email" />
          </p>
          <p>
            <label>Name *</label>
            <input onChange={e=>setPhone(e.target.value)} required type="text" placeholder=" Enter Your Name" />
          </p>
          <p>
            <label>Phone *</label>
            <input onChange={e=>setPhone(e.target.value)} required type="tel" placeholder="Phone" />
          </p>
          <p>
            <label>Categories *</label>
            <select required>
              <option value="">------</option>
              <optgroup label="Message Type" onChange={e=>setCategory(e.target.value)}>
                <option value="html">Work</option>
                <option value="css">Complain</option>
                <option value="php">Consulting</option>
                <option value="js">JavaScript</option>
              </optgroup>
            </select>
          </p>
          <button>Send</button>
        </fieldset>
      </form>
    </section>
  );
};

export default ContactForm;
