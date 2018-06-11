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
      <div>
        <Link to='/'>Home</Link>
        <Link to='/admin'>Admin</Link>
        <Link to='/restrict'>Restrict</Link>
        <Link to='/login'>Login</Link>
      </div>
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
