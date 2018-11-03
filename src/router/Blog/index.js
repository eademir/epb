import React, { Component } from 'react';

// Components
import Nav from './../../components/layouts/nav'
import Footer from './../../components/layouts/footer'
import BlogIn from './../../components/layouts/blog'

class Home extends Component {
    render() {
        return (
           <main>
               <Nav/>
               <BlogIn/>
               <BlogIn/>
               <BlogIn/>
               <BlogIn/>
               <BlogIn/>
               <BlogIn/>
               <Footer/>
           </main>
        )
    }
}

export default Home