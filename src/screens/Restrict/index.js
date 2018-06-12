import React from 'react'
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const Restrict = (props) => {
  if (!props.auth.isAuth){
    return <Redirect to='/login'/>
  }

  return (
    <h1>Restrict</h1>
  )
}

const mapStateToProps = state => {
  return{
    auth: state.auth
  }
}

export default connect(mapStateToProps)(Restrict)