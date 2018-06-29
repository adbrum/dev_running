import React, {Component} from 'react'
import store from './redux'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './screens/Home'
import Login from './screens/Login'
import Admin from './screens/Admin/index'
import Restrict from './screens/Restrict/index'
import { Container } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Container>
            <Route exact path='/' component={Home}/>
            <Route path='/admin' component={Admin}/>
            <Route path='/restrict' component={Restrict}/>
            <Route path='/login' component={Login}/>
          </Container>
        </Router>
      </Provider>
    )
  }
}

export default App;
