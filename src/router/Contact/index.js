import React, { Component } from 'react';

// Components
import Nav from './../../components/layouts/nav'
import Footer from './../../components/layouts/footer'
import BlogIn from './../../components/layouts/blog'
import Phead from './../../components/layouts/phead'
import Form from './../../components/layouts/contact-form'
import Links from './../../components/layouts/contact-links'

class Contact extends Component {
    render() {
        return (
           <main>
               <Nav/>
               <Phead/>
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
