import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faHandshake, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Nevbar() {
    const scrollTo = (id) => {
        const section = document.getElementById(id);
        if (section) {
            const topOffset = section.offsetTop; // Get the top offset of the section
            window.scrollTo({ top: topOffset, behavior: 'smooth' });
        }
    };

    return (
        <div className="floating-icons">
            <div onClick={() => scrollTo('home')}><FontAwesomeIcon icon={faHome} /></div>
            <div onClick={() => scrollTo('about')}><FontAwesomeIcon icon={faUsers} /></div>
            <div onClick={() => scrollTo('events')}><FontAwesomeIcon icon={faUsers} /></div>
            <div onClick={() => scrollTo('sponsors')}><FontAwesomeIcon icon={faHandshake} /></div>
            <div onClick={() => scrollTo('contact')}><FontAwesomeIcon icon={faEnvelope} /></div>
        </div>
    );
};

export default Nevbar;
