import React from "react";
import '../App.css';

function AboutUs() {
    return (
        <div className="container">
            <main>
                <h1 className="page-title">About Us</h1>

                <section className="content">
                    <div className="content__descriptor">
                        <h4 className="content__text">
                            Our Mission
                        </h4>
                        <p className="content__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>

                    <div className="content__text-box">
                        <h4 className="content__text">
                            Who We Are
                        </h4>
                        <p className="content__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <p className="content__text">
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default AboutUs;
