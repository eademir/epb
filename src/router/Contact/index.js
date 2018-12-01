import React, { Component } from 'react';

// Components
import Nav from './../../components/layouts/nav'
import Footer from './../../components/layouts/footer'
import Phead from './../../components/layouts/phead'
import Form from './../../components/layouts/contact-form'
import Links from './../../components/layouts/contact-links'

class Contact extends Component {
    render() {
        return (
           <main>
               <Nav/>
               <Phead pageName='CONTACT'/>
               <div class='container'>
                 <Form/>
                 <Links/>
               </div>
               <Footer/>
           </main>
        )
    }
}

export default Contact
