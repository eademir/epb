import React from 'react';

const Phead = (props) => {
        if (props.position === 'blog'){
           const pageName = 'BLOG'
           return (
               <div class='phead'>
                   <h1>
                     {pageName}
                   </h1>
              </div>
           )
        }
        else if(props.position === '/about-me'){
           const pageName = 'ABOUT ME'
           return (
               <div class='phead'>
                   <h1>
                     {pageName}
                   </h1>
              </div>
           )
        }
        else if(props.position === 'projects'){
           const pageName = 'PROJECTS'
           return (
               <div class='phead'>
                   <h1>
                     {pageName}
                   </h1>
              </div>
           )
        }
        else {
          const pageName = 'CONTACT'
          return (
              <div class='phead'>
                  <h1>
                    {pageName}
                  </h1>
             </div>
          )
        }

}

export default Phead
