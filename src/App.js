import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import StaticView from './views/StaticView'
import TypingView from './views/TypingView'
import ListenView from './views/ListenView'

import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isVisible: false
    }
  }

  componentWillMount() {
    this.setState({
      isVisible: true
    })

    console.log(this.state.isVisible)
  }

  componentDidMount() {
    this.setState({
      isVisible: false
    })

    console.log(this.state.isVisible)
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Switch>
            <Route 
              exact
              path="/"
              component={StaticView}
              animationInDelay={ 1200 }
              animationOutDelay={ 3000 }
              isVisible={this.state.isVisible}
            />
            <Route 
              path="/typing"
              component={ TypingView }
              animationInDelay={4500}
              animationOutDelay={7000}
              isVisible={this.state.isVisible}
            />
              
            <Route 
              path="/listen"
              component={ListenView}
              animationInDelay={8000}
              animationOutDelay={11000}
              isVisible={this.state.isVisible}
            />

            {/* <Route exact path="/" render={({location}) => (
                <StaticView
                  animationInDelay={5000}
                  animationOutDelay={8000}
                  isVisible={isVisible}
                />
              )}
            />
            <Route path="/typing" render={({location}) => (
                <TypingView
                  animationInDelay={10000}
                  animationOutDelay={14000}
                  isVisible={isVisible}
                />
              )} 
            />
            <Route path="/listen" render={({location}) => (
                <ListenView 
                  animationInDelay={12000}
                  animationOutDelay={16000}
                  isVisible={isVisible}
                />
              )} 
            /> */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App
