import React from 'react'

const Nav = () =>{
    return(
        <nav>
            <ul>
                <li title='Home'><a href="/">Home</a></li>
                <li title='Blog'><a href="blog">Blog</a></li>
                <li title='Projects'><a href="projects">Projects</a></li>
                <li title='About me'><a href="about-me">About me</a></li>
                <li title='Contact'><a href="contact">Contact</a></li>
            </ul>
        </nav>
    )
};


export default Nav
