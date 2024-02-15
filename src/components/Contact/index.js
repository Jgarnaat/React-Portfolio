import React, { useState } from "react";
import { Helmet } from 'react-helmet';
import { validateEmail } from "../../utils/helpers";
// edit hello line
// make sure form works properly

function Contact() {
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleInputChange = (event) => {
        const { target } = event;
        const inputType = target.name;
        const inputValue = target.value;

        if ('email' === inputType) {
            setEmail(inputValue);
        } else if ('userName' === inputType) {
            setUserName(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        if (!validateEmail(email) || !userName) {
            setErrorMessage('Email or Name is invalid');
            return;
        }

        setUserName("");
        setMessage("");
        setEmail("");
    };

    return (
        
        <section id='reach-out' className="contact">
            <Helmet>
                <title>Contact Joshua</title>
            </Helmet>
            <div className="flex-row">
                <h2 className="section-title secondary-border">Reach Out</h2>
            </div>

            <div className="contact-info">
                <div>
                    <h3>Hello {userName}</h3>
                    <p> Below is my contact information</p>
                    <address>
                        <strong>Okemos, MI <br /></strong>
                        <strong>P:</strong><a href='rel:517.927.5427'>517.927.5427</a>
                        <br />
                        <strong>E:</strong><a href='mailto://jgarnaat8685@yahoo.com'>Jgarnaat8685@yahoo.com
                        </a>
                    </address>
                    <p>
                        If you would like to contact me feel free to reach out
                    </p>
                </div>

                <div className="contact-form">
                    <h3>Contact Me</h3>
                    <form className="form">
                        <label for='contact-name'>Your Name</label>
                        <input 
                        value={userName}
                        name='userName'
                        onChange={handleInputChange}
                        type='text'
                        id='contact-name'
                        placeholder="Your Name"
                        />

                        <label for='contact-email'>Your Email</label>
                        <input
                        value={email}
                        name='email'
                        onChange={handleInputChange}
                        type='email'
                        id='contact-email'
                        placeholder="Your Email"
                        />

                        <label for='contact-message'>Message</label>
                        <textarea
                        value={message}
                        name="message"
                        onChange={handleInputChange}
                        id='contact-message'                        
                        placeholder="Your Message"
                        />
                        <button type="button" onClick={handleFormSubmit}>
                            Submit
                        </button>
                    </form>
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Contact