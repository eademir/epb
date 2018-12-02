import React, { Component } from 'react';

import Project from '../../assets/img/pro.png'
import Blog from '../../assets/img/blo.png'
import Edu from '../../assets/img/edu.png'


class Middle extends Component {
    render() {
        return (
          <div class='middle'>
            <div class='container'>
                <div class='row'>
                    <div class='col-md-4'>
                        <div class='in'>
                            <div class='title'>
                                <img src={Project} alt='project'/>
                            </div>
                            <div class='body'>
                                <p>
                                    123421 yapılmış proje
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class='col-md-4'>
                        <div class='in'>
                            <div class='title'>
                                <img src={Blog} alt='project'/>
                            </div>
                            <div class='body'>
                                <p>12312 yazılmış blog</p>
                            </div>
                        </div>
                    </div>
                    <div class='col-md-4'>
                        <div class='in'>
                            <div class='title'>
                                <img src={Edu} alt='project'/>
                            </div>
                            <div class='body'>
                                <p>odtü inşaat müdendisi lisans ve yüksek lisans mezuniyeti</p>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
         </div>
        )
    }
}

export default Middle
