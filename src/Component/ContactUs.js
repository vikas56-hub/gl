// ContactUs.jsx

import React from 'react';

function ContactUs() {
    return (
        <>


            <section className="contact_us">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 offset-md-1">
                            <div className="contact_inner">
                                <div className="row">
                                    <div className="col-md-10">
                                        <div className="contact_form_inner">
                                            <div className="contact_field">
                                                <h3>Contact Us</h3>
                                                <p>
                                                    Feel Free to contact us any time. We will get back to
                                                    you as soon as we can!.
                                                </p>
                                                <input
                                                    type="text"
                                                    className="form-control form-group"
                                                    placeholder="Name"
                                                />
                                                <input
                                                    type="text"
                                                    className="form-control form-group"
                                                    placeholder="Email"
                                                />
                                                <textarea
                                                    className="form-control form-group"
                                                    placeholder="Message"
                                                ></textarea>
                                                <button className="contact_form_submit">Send</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="right_conatct_social_icon d-flex align-items-end">
                                            <div className="socil_item_inner d-flex">
                                                <li>
                                                    <a href="#">
                                                        <i className="fab fa-facebook-square"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fab fa-instagram"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fab fa-twitter"></i>
                                                    </a>
                                                </li>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="contact_info_sec"></div>


                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="map_sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 offset-md-1">
                            <div className="map_inner">

                                <div className="map_bind">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3424.796933768103!2d77.11584387558557!3d30.864359874521046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f839442ab0b5b%3A0x6d5230f107c2117a!2sShoolini%20University!5e0!3m2!1sen!2sin!4v1707056481078!5m2!1sen!2sin"
                                        width="100%"
                                        height="350"
                                        frameborder="0"
                                        style={{ border: '0' }}
                                        allowfullscreen=""
                                        aria-hidden="false"
                                        tabindex="0"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
};

export default ContactUs;
