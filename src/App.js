import React from 'react'
import Main from './Main'
import Login from './Login'
import Success from './Success'
import './App.css'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      route: 'main'
    }
  }

  setRoute = (newRoute) => {
    this.setState({
      route: newRoute
    })
  }

  render(){
    switch(this.state.route){
    case 'main':
      return <Main onLogin={this.setRoute}/> 
    case 'success':     
      return <Success onLogout={this.setRoute} />
    case 'login':
      return <Login onSuccess={this.setRoute} />
    }
  }
}

export default App;
