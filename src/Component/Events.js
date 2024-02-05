import React from "react";
import { Card, Button } from 'react-bootstrap';
import '../App.css';
import '../style.scss';

function Events() {
    return (
        <div class="container">
            <h2 class="page-title">events</h2>
            <div className="event-page-container">
                <div className="event-cards">
                    <Card className="event-card">
                        <Card.Img variant="top" alt="poster" src="ctf_poster.jpg" />
                        <Card.Body>
                            <Card.Title>CTF</Card.Title>
                            <Card.Text>
                                Join our Capture The Flag event and test your cybersecurity skills in a competitive environment.
                            </Card.Text>
                            <Button variant="primary" href="registration_ctf">Register</Button>
                        </Card.Body>
                    </Card>

                    <Card className="event-card">
                        <Card.Img variant="top" alt="poster" src="hackathon_poster.jpg" />
                        <Card.Body>
                            <Card.Title>Hackathon</Card.Title>
                            <Card.Text>
                                Participate in our Hackathon and showcase your coding prowess to solve real-world problems.
                            </Card.Text>
                            <Button variant="primary" href="registration_hackathon">Register</Button>
                        </Card.Body>
                    </Card>

                    <Card className="event-card">
                        <Card.Img variant="top" alt="poster" src="esports_poster.jpg" />
                        <Card.Body>
                            <Card.Title>Esports</Card.Title>
                            <Card.Text>
                                Compete in our Esports tournament and experience the thrill of virtual competition.
                            </Card.Text>
                            <Button variant="primary" href="registration_esports">Register</Button>
                        </Card.Body>
                    </Card>

                    <Card className="event-card">
                        <Card.Img variant="top" alt="poster" src="micromousemaze_poster.jpg" />
                        <Card.Body>
                            <Card.Title>MicroMouse Maze</Card.Title>
                            <Card.Text>
                                Navigate a maze with a small robotic mouse in our MicroMouse Maze event.
                            </Card.Text>
                            <Button variant="primary" href="registration_micromousemaze">Register</Button>
                        </Card.Body>
                    </Card>

                    <Card className="event-card">
                        <Card.Img variant="top" alt="poster" src="robowar_poster.jpg" />
                        <Card.Body>
                            <Card.Title>Robowar</Card.Title>
                            <Card.Text>
                                Build and battle with your custom-made robot in the Robowar competition.
                            </Card.Text>
                            <Button variant="primary" href="registration_robowar">Register</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>

        </div>

    );
}

export default Events;
