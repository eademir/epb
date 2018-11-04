import React, { Component } from 'react';

// Components
import Nav from './../../components/layouts/nav'
import Footer from './../../components/layouts/footer'
import Phead from './../../components/layouts/phead'
import AboutMe from './../../components/layouts/aboutme'

class About extends Component {
    render() {
        return (
           <main>
               <Nav/>
               <Phead/>
               <AboutMe/>
               <Footer/>
           </main>
        )
    }
}

export default About