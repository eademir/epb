import React, { Component } from 'react';

// Components
import Header from './../../components/layouts/header'
import Footer from './../../components/layouts/footer'

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
    }
  }
  componentWillMount(){

  }
  componentDidMount(){
    this.setState({
      isLoading:false
    })
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log(nextState)
    return true;
  }
    render() {
      if(this.state.isLoading){
        return(
          <main>
            
          </main>
        );
      }
        return (
           <main>
               <Header/>
               <Footer/>
           </main>
        )
    }
}

export default Home
