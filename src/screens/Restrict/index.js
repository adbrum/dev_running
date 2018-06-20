import React from 'react'
import {connect} from "react-redux";
import {Redirect, Link, Route} from "react-router-dom";
import Home from "./Home";
import Runs from "./Runs";

const Restrict = (props) => {
  if (!props.auth.isAuth){
    return <Redirect to='/login'/>
  }

  return (
    <div>
      <h1>Restrict</h1>
      <p>
        <Link to='/restrict'>Home</Link>
        <Link to='/restrict/runs'>Runs</Link>
      </p>
      <div>
        <Route exact path={`${props.match.path}/`} component={Home}/>
        <Route path={`${props.match.path}/runs`} component={Runs} />
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return{
    auth: state.auth
  }
}

export default connect(mapStateToProps)(Restrict)