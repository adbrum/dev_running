import React, {Component} from 'react'

import './App.css'
import store from './redux'
import {Provider} from 'react-redux'
import Header from "./Header";
import {Route, BrowserRouter as Router} from 'react-router-dom'

const Home = (props) => {
  return (
    <h1>Home</h1>
  )
}
const Admin = (props) => {
  return (
    <h1>Admin</h1>
  )
}
const Restrito = (props) => {
  return (
    <h1>Restrito</h1>
  )
}
const Login = (props) => {
  return (
    <h1>Login</h1>
  )
}



class App extends Component {

  /*async componentDidMount(){
    let token = localStorage.getItem('token')
    if(!token){
      const login = await axios.post('http://localhost:3001/users/login', {
        email: 'tuliofaria@devpleno.com',
        passwd: 'abc123'
      })
      token = login.data.token
      localStorage.setItem('token', token)
    }
    const decoded = jwtDecode(token)
    console.log(decoded)

    const user = axios.get('http://localhost:3001/users/me', {
      headers: {
        Authorization: 'Bearer '+token
      }
    })

    console.log(user)

  }/*/
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route exact path='/' component={Home}/>
            <Route path='/admin' component={Admin}/>
            <Route path='/restrito' component={Restrito}/>
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
