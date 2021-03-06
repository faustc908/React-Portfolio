import React from 'react';
import "./Contact.css"
import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";

const Contact = () => {
    return (
        <div class='skills'>
            <h4>If you want to reach out or seeing other work:</h4>
            <p className='heading'>Email LinkedIn Github</p>
            <a className='links' href='mailto:faust.colint@gmail.com'><FaMailBulk /></a>
            <a className='links' href='https://www.linkedin.com/in/colin-faust-237077100?trk=people-guest_profile-result-card_result-card_full-click' target="_blank"><FaLinkedin /></a>
            <a className='links' href='https://github.com/faustc908' target="_blank"><FaGithub /></a>
        </div>
    )
}

export default Contact;