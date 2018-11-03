import React, { Component } from 'react';

import Img from '../../assets/img/slider.png'

class SliderImg extends Component {
    render() {
        return (
            <div class='slider'>
                <img src={Img} alt='slider'/>
           </div>
        )
    }
}

export default SliderImg