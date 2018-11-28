import React, { Component } from 'react';

// Components
import Nav from './../../components/layouts/nav'
import Footer from './../../components/layouts/footer'
import Phead from './../../components/layouts/phead'
import ProjectList from './../../components/layouts/projectlist'

class Projects extends Component {
    render() {
        return (
           <main>
               <Nav/>
               <Phead/>
               <ProjectList/>
               <Footer/>
           </main>
        )
    }
}

export default Projects
