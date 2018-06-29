import React from 'react';
import {connect} from 'react-redux'
import ActionCreators from '../../../redux/actionCreators'
import {Link} from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

const Header = (props) => {

  return (
    <Menu>
        <Menu.Item>Corridas <b>Restrict</b></Menu.Item>
        <Menu.Item as={Link} to='/restrict'>Home</Menu.Item>
        <Menu.Item as={Link} to='/restrict/runs'>Racing</Menu.Item>
    </Menu>
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
