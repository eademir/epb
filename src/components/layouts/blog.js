import React, { Component } from 'react';

import Blog from '../../assets/img/blo.png'

class BlogIn extends Component {
    render() {
      const Lorem = "Lorem ipsum dolor sit amet";
        return (
            <div class='col-md-6'>
              <div class='in'>
                <div class='col-sm-12'>
                    <h3>{Lorem}</h3>
                </div>
                <div class='col-sm-12'>
                    <img src={Blog} alt='project'/>
                </div>
                <div class='col-sm-12'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id nunc quis nisi consequat dignissim nec id dui. Donec ornare egestas libero, et aliquam sem vehicula in. Quisque eget lacus suscipit, pulvinar massa et, tempus tortor. Nam tincidunt nec leo non congue. </p>
                </div>
              </div>
            </div>
        )
    }
}

export default BlogIn
