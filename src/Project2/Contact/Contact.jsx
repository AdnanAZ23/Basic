import React, { useState } from "react";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { Btn } from "../Components/Btn";
import "./Contact.css";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };
  return (
    <div>
      <div className="heading-contact">
        <div className="contact-head">Conact Us</div>
        <div className="contact-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
          porro architecto fugiat accusantium laborum ad culpa, praesentium
          tenetur quae doloremque quasi autem quisquam iste provident. Impedit
          non laborum incidunt. Minima.
        </div>
        <div className="contact-text">
          {name !== "" &&
            `Name: ${name}
          Email: ${email} 
          ${text}`}
        </div>
      </div>
      <div className="contact-page">
        <div className="main-contact">
          <div className="btns">
            <Btn text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px" />} />
            <Btn text="VIA CALL" icon={<FaPhoneAlt fontSize="24px" />} />
          </div>
          <Btn
            isOutline={true}
            text="VIA EMAIL FORM"
            icon={<HiMail fontSize="24px" />}
          />
          <div>
            <form onSubmit={onSubmit} className="form-control">
              <div className="label-cover">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" />
              </div>
              <div className="label-cover">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" />
              </div>
              <div className="label-cover">
                <label>Text</label>
                <textarea rows={8} />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Btn text="SUBMIT BUTTON" />
              </div>
            </form>
          </div>
        </div>
        <div>
          <img src="/contact.svg" alt="" />
        </div>
      </div>
    </div>
  );
};
