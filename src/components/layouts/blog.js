import React, { Component } from 'react';

import Blog from '../../assets/img/blo.png'

class BlogIn extends Component {
    render() {
        return (
            <div class='row'>
                <div class='col-sm-3'>
                    <img src={Blog} alt='project'/>
                </div>
                <div class='col-sm-9'>
                    <h3>Lorem ipsum dolor sit amet</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id nunc quis nisi consequat dignissim nec id dui. Donec ornare egestas libero, et aliquam sem vehicula in. Quisque eget lacus suscipit, pulvinar massa et, tempus tortor. Nam tincidunt nec leo non congue. </p>
                </div>
            </div>
        )
    }
}

export default BlogIn