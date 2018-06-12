import React, {Component} from 'react'

import './App.css'
import store from './redux'
import {Provider} from 'react-redux'
import Header from "./Header";
import {Route, BrowserRouter as Router} from 'react-router-dom'
import Home from './screens/Home'
import Login from './screens/Login'
import Admin from './screens/Admin/index'
import Restrict from './screens/Restrict/index'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route exact path='/' component={Home}/>
            <Route path='/admin' component={Admin}/>
            <Route path='/restrict' component={Restrict}/>
            <Route path='/login' component={Login}/>
            <Header/>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App;
