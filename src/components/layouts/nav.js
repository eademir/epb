import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBookReader, faBriefcase, faComments, faAddressCard } from '@fortawesome/free-solid-svg-icons'

const Nav = () =>{
    return(
        <nav>
            <ul>
                <li title='Home'><a href="/"><FontAwesomeIcon icon={faHome} /><br/>Home</a></li>
                <li title='Blog'><a href="blog"><FontAwesomeIcon icon={faBookReader} /><br/>Blog</a></li>
                <li title='Projects'><a href="projects"><FontAwesomeIcon icon={faBriefcase} /><br/>Projects</a></li>
                <li title='About me'><a href="about-me"><FontAwesomeIcon icon={faAddressCard} /><br/>About me</a></li>
                <li title='Contact'><a href="contact"><FontAwesomeIcon icon={faComments} /><br/>Contact</a></li>

            </ul>
        </nav>
    )
};


export default Nav
