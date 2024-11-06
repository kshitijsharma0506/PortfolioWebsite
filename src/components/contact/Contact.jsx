import React, { useRef } from 'react';
import './contact.css';
import SendIcon from '../../assets/SendIcon';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
        ).then(
            () => {
                console.log('SUCCESS!');
            },
            (error) => {
                console.log('FAILED...', error.text);
            },
        );
        e.target.reset();
    };

    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Get in touch</h2>
            <span className="section__subtitle">Contact Me</span>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Talk to me</h3>

                    <div className="contact__info">
                        <div className="contact__card">
                            <i className="bx bx-mail-send contact_card-icon"></i>

                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">kshitijsharma5620@gmail.com</span>

                            <a href="mailto:kshitijsharma5620@gmail.com?subject=Inquiry&body=Hello Kshitij," className="contact__button">
                                Write me{" "}
                                <i className="bx bx-right-arrow-alt contact_button-icon"></i>
                            </a>
                        </div>

                        <div className="contact__card">
                            <i className="bx bxl-whatsapp contact__card-icon"></i>

                            <h3 className="contact__card-title">Whatsapp</h3>
                            <span className="contact__card-data">8290274400</span>

                            <a target='_blank' href="https://wa.me/918290274400?text=Hello" className="contact__button">
                                Write me{" "}
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>

                        <div className="contact__card">
                            <i className="bx bxl-linkedin contact__card-icon"></i>

                            <h3 className="contact__card-title"> LinkedIn</h3>
                            <span className="contact__card-data">Kshitij Sharma</span>

                            <a target='_blank' href="https://www.linkedin.com/in/kshitij56/" className="contact__button">
                                Write me{" "}
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="contact_content">
                    <h3 className="contact_title">Write me your project</h3><br />

                    <form ref={form} onSubmit={sendEmail} className="contact__form">
                        <div className="contact__form-div">
                            <label className="contact__form-tag">Name</label>
                            <input type="text" name="name"
                                className="contact__form-input"
                                placeholder="Insert your name" />
                        </div>

                        <div className="contact__form-div">
                            <label className="contact__form-tag">Mail</label>
                            <input type="email" name="email"
                                className="contact__form-input"
                                placeholder="Insert your email" />
                        </div>

                        <div className="contact__form-div contact__form-area">
                            <label className="contact__form-tag">Project</label>
                            <textarea name="project" className="contact__form-input" placeholder='Write your project' cols="30" rows="10"></textarea>
                        </div>

                        <button type="submit" className="button button--flex">
                            Send Message
                            <SendIcon />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact