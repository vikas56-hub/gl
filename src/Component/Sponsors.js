import React from "react";
import '../style.scss';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import logo from '../Assets/sulogo.png';

function SponsorsPage() {
    return (
        <div className="sponsors-page container">
            <h2 class="page-title">OUR SPONSORS</h2>

            <section className="sponsor-section gold">
                <h1 className="mb-5">Gold Sponsors</h1>
                <div className="logos d-flex justify-content-center">
                    {/* Add gold sponsor logos here */}
                    <img className="logo" src={logo} alt="Gold Sponsor 1" />
                    <img className="logo" src={logo} alt="Gold Sponsor 1" />
                    <img className="logo" src={logo} alt="Gold Sponsor 1" />
                    <img className="logo" src={logo} alt="Gold Sponsor 1" />
                    <img className="logo" src={logo} alt="Gold Sponsor 1" />

                    {/* Add more gold sponsor logos as needed */}
                </div>
            </section>

            <section className="sponsor-section silver">
                <h2 className="mb-5">Silver Sponsors</h2>
                <div className="logos d-flex justify-content-center">
                    {/* Add silver sponsor logos here */}
                    <img className="logo" src={logo} alt="Gold Sponsor 1" />
                    <img className="logo" src={logo} alt="Gold Sponsor 1" />
                    <img className="logo" src={logo} alt="Gold Sponsor 1" />
                    <img className="logo" src={logo} alt="Gold Sponsor 1" />

                    {/* Add more silver sponsor logos as needed */}
                </div>
            </section>

            <section className="sponsor-section bronze">
                <h2 className="mb-5">Bronze Sponsors</h2>
                <div className="logos d-flex justify-content-center">
                    {/* Add bronze sponsor logos here */}
                    <img className="logo" src={logo} alt="Gold Sponsor 1" />
                    <img className="logo" src={logo} alt="Gold Sponsor 1" />
                    <img className="logo" src={logo} alt="Gold Sponsor 1" />
                    <img className="logo" src={logo} alt="Gold Sponsor 1" />
                    {/* Add more bronze sponsor logos as needed */}
                </div>
            </section>
        </div>
    );
}

export default SponsorsPage;



