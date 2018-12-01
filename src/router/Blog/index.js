import React, { Component } from 'react';

// Components
import Nav from './../../components/layouts/nav'
import Footer from './../../components/layouts/footer'
import BlogIn from './../../components/layouts/blog'
import Phead from './../../components/layouts/phead'

class Blog extends Component {
    render() {
        return (
           <main>
             <Nav/>
             <Phead/>
             <div class='blog'>
               <div class='container'>
                 <div class='row'>
                    <BlogIn/>
                    <BlogIn/>
                    <BlogIn/>
                    <BlogIn/>
                    <BlogIn/>
                    <BlogIn/>
                  </div>
                </div>
              </div>
             <Footer/>
           </main>
        )
    }
}

export default Blog
