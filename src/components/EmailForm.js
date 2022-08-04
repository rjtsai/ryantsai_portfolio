import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./MessageWindow.css";
import toast, { Toaster } from "react-hot-toast";

export const EmailForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zbejpls",
        "template_xy0qhaj",
        form.current,
        "kzW5TcDi3aq7Es-_p"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast("sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="message-content">
      <form ref={form} onSubmit={sendEmail}>
        <div className="input-wrap">
          <div className="single-input">
            <input type="text" name="user_name" placeholder="name" />
          </div>
          <div className="single-input">
            <input type="email" name="user_email" placeholder="email" />
          </div>
          <div className="single-input">
            <input type="text" name="user_subject" placeholder="subject" />
          </div>
          <div className="multi-input">
            <textarea name="message" placeholder="message:" />
          </div>
        </div>
        <div className="button-wrap">
          <input type="submit" value="Send" />
        </div>
      </form>
      <Toaster
        toastOptions={{
          className: "",
          style: {
            border: "1px solid #713200",
            padding: "9px",
            marginTop: "2%",
            color: "#713200",
          },
        }}
      />
    </div>
  );
};
