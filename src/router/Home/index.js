import React, { Component } from 'react';

// Components
import Header from './../../components/layouts/header'
import Middle from './../../components/layouts/middle'
import Footer from './../../components/layouts/footer'

class Home extends Component {
    render() {
        return (
           <main>
               <Header/>
               <Middle/>
               <Footer/>
           </main>
        )
    }
}

export default Home