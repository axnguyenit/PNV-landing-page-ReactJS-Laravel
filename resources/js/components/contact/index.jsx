import React, { useState } from 'react';
import axios from 'axios';

const Contact = (props) => {
    const [errTxt, setErrTxt] = useState('');
    const [stt, setStt] = useState('');
    const [contact, setContact] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const isValidEmail = (emailAddress) => {
        var pattern = new RegExp(
            /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,
        );
        return pattern.test(emailAddress);
    };

    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        if (name === 'email') {
            if (isValidEmail(value)) {
                setErrTxt('');
            } else {
                setErrTxt('Email address invalid!');
            }
        }
        setContact({ ...contact, [name]: value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setErrTxt('');
        setStt('Sending...');
        axios
            .post('/api/contact', contact)
            .then((res) => {
                if (res.status === 200) {
                    setStt('Your info has successfully been sent.');
                } else {
                    setErrTxt('Something went wrong, try again!');
                    setStt('');
                }
            })
            .catch((err) => {
                setErrTxt('Something went wrong, try again!');
                setStt('');
            });
    };

    return (
        <div id="contact" className="p-80px-tb bg-white">
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 offset-sm-2">
                        <div className="section-title text-center m-60px-b">
                            <h2>{props.title}</h2>
                            <div className="divider-circle mx-auto" />
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: props.slogan,
                                }}
                            ></p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 col-md-6 col-sm-12 m-25px-b">
                        <div className="contact-form-box bg-light">
                            <form id="contact-form" onSubmit={onSubmit}>
                                <div className="message col">
                                    {stt === 'Sending...' ? (
                                        <p className="email-loading alert alert-warning">
                                            <img
                                                src="./assets/images/loading.gif"
                                                alt=""
                                            />
                                            &nbsp;&nbsp;&nbsp;{stt}
                                        </p>
                                    ) : null}
                                    {stt ===
                                    'Your info has successfully been sent.' ? (
                                        <p className="email-success alert alert-success">
                                            <i className="icon icon-icon-check-alt2" />
                                            {stt}
                                        </p>
                                    ) : null}
                                    {errTxt ? (
                                        <p className="email-failed alert alert-danger">
                                            <i className="icon icon-icon-close-alt2" />
                                            {errTxt}
                                        </p>
                                    ) : null}
                                </div>
                                <div className="mb13">
                                    <input
                                        name="name"
                                        className="contact-name"
                                        id="contact-name"
                                        type="text"
                                        onChange={onChange}
                                        placeholder="Your Name"
                                        required
                                    />
                                </div>
                                <div className="mb13">
                                    <input
                                        name="email"
                                        className="contact-email"
                                        id="contact-email"
                                        type="email"
                                        onChange={onChange}
                                        placeholder="Your Email"
                                        required
                                    />
                                </div>
                                <div className="mb13">
                                    <input
                                        name="subject"
                                        className="contact-subject"
                                        id="contact-subject"
                                        type="text"
                                        onChange={onChange}
                                        placeholder="Subject"
                                        required
                                    />
                                </div>
                                <div className="mb30">
                                    <textarea
                                        name="message"
                                        className="contact-message"
                                        id="contact-message"
                                        onChange={onChange}
                                        placeholder="Your Message"
                                        required
                                        defaultValue={''}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-default"
                                >
                                    Send Now
                                </button>
                            </form>
                        </div>
                    </div>
                    {/* End contact form area*/}
                    <div className="col-lg-4 col-md-6 col-sm-12 m-25px-b">
                        <div className="address-wrap bg-light p-30px">
                            <ul>
                                <li>
                                    <span>Address:</span>
                                    {props.address}
                                </li>
                                <li>
                                    <span>Phone:</span>
                                    <a href="#">{props.phone}</a>
                                </li>
                                <li>
                                    <span>Email:</span>
                                    <a href="#">{props.email}</a>
                                </li>
                            </ul>
                            <h4>Connect our socials</h4>
                            <ul className="nav light-icon social-icons">
                                {props.facebook ? (
                                    <li>
                                        <a href={props.facebook}>
                                            <i
                                                className="icofont-facebook"
                                                target="_blank"
                                            />
                                        </a>
                                    </li>
                                ) : null}
                                {props.youtube ? (
                                    <li>
                                        <a href={props.youtube}>
                                            <i
                                                className="icofont-youtube"
                                                target="_blank"
                                            />
                                        </a>
                                    </li>
                                ) : null}
                                {props.skype ? (
                                    <li>
                                        <a href={props.skype}>
                                            <i
                                                className="icofont-skype"
                                                target="_blank"
                                            />
                                        </a>
                                    </li>
                                ) : null}
                                {props.twitter ? (
                                    <li>
                                        <a href={props.twitter}>
                                            <i
                                                className="icofont-twitter"
                                                target="_blank"
                                            />
                                        </a>
                                    </li>
                                ) : null}
                                {props.linkedin ? (
                                    <li>
                                        <a href={props.linkedin}>
                                            <i
                                                className="icofont-linkedin"
                                                target="_blank"
                                            />
                                        </a>
                                    </li>
                                ) : null}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
