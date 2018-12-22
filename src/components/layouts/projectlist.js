import React, { Component } from 'react';

import Project from './project'

class ProjectList extends Component {
    render() {
        return (
           <div class='container'>
               <div class='row'>
                  <Project/>
                  <Project/>
                  <Project/>
                  <Project/>
                  <Project/>
                  <Project/>
                  <Project/>
                  <Project/>
                  <Project/>
                  <Project/>
               </div>
           </div>
        )
    }
}

export default ProjectList
