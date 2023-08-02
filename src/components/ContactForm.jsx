import React, { useRef } from "react";
import emailjs from "@emailjs/browser"

export default function ContactForm({ setContactForm }) {
    const sectionRef = useRef();
    const formRef = useRef();
    function closeForm(e) {
        e?.preventDefault();

        sectionRef.current.classList.add("hide")
        setTimeout(() => {
            setContactForm(false);
            sectionRef.current.classList.remove("hide")
        }, 500)
    }

    function sendEmail(e) {
        e.preventDefault();

        document.getElementById("send_button").classList.add("loading");
        document.getElementById("send_button").setAttribute("disabled", true)
        document.getElementById("send_button").innerText = ""
        emailjs.sendForm('service_0k7yua7', 'template_0qcmeep', formRef.current, 'EA-3RrG_w1F1m5nHq')
        .then((result) => {
            document.getElementById("send_button").innerText = "Thank you!"
            document.getElementById("send_button").classList.remove("loading");
            setTimeout(() => {
                closeForm();
            }, 1200)
        }, (error) => {
            console.log(error.text);
            document.getElementById("send_button").removeAttribute("disabled")
            });
    }

    return (
        <section ref={sectionRef} id="contact_section">
            <form ref={formRef} onSubmit={sendEmail}>
                <label>
                    Name
                    <input name="name" type="text" required />
                </label>
                <label>
                    Email
                    <input name="email" type="email" required />
                </label>
                <label id="textarea_label">
                    Message
                    <textarea name="message" id="message" required ></textarea>
                </label>
                <button id="close_button" onClick={closeForm}><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 256 256" fill="#000000" xmlns:v="https://vecta.io/nano"><path d="M39.52 32.16l-7.36 7.36L120.64 128l-88.48 88.48 7.36 7.36L128 135.36l88.48 88.48 7.36-7.36L135.36 128l88.48-88.48-7.36-7.36L128 120.64z" fill="#fff" /></svg></button>
                <button id="send_button">Send</button>
            </form>
        </section>)
};
