import React from 'react';
import {connect} from 'react-redux'
import ActionCreators from './redux/actionCreators'
import logo from './logo.svg'
import {Link} from 'react-router-dom'

const Header = (props) => {

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo"/>
      <h1 className="App-title">Welcome to React</h1>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/admin'>Admin</Link></li>
        <li><Link to='/restrito'>Restrito</Link></li>
        <li><Link to='/login'>Login</Link></li>
      </ul>
    </header>
  )
}
const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

const mapDispacheToProps = dispatch => {
  return {
    signin: (email, passwd) => ActionCreators.signinRequest(email, passwd)
  }
}

export default connect(mapStateToProps, mapDispacheToProps)(Header)
