import React, { Component } from 'react';

import Nav from './nav'
import Slider from './slider'

class Header extends Component {
    render() {
        return (
            <header>
                <Nav/>
                <Slider/>
           </header>
        )
    }
}

export default Header