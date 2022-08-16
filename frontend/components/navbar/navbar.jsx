import React from "react";
import { Link } from 'react-router-dom';


class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.userNav = this.userNav.bind(this)
  }

  userNav(){
    return(
    (this.props.currentUser ? (
      <div id='user-nav'>
        <div id='user-name'>Hello, {this.props.currentUser.username}</div>
        <button id='log-out' onClick={this.props.logout}>Log Out</button>
      </div>
    ) : (
      <div id='right-navlinks'>
        <Link to='/signup' id = 'signup-link'>
          <button id='sign-up-button'>Sign Up</button>
        </Link >
        <Link to='/login' id = 'login-link'>
          <button id='log-in-button'>Log In</button>
        </Link>
      </div >
    )))
  }
  render(){
    return (
      <div id='navbar'>
        <section id='center'>
          <Link to='/' className="navbar-title">
            <img src={window.mountain} width="82px" height="82px" className='logo'/>
            <span className="nav-title">AllHills</span>
          </Link>
        </section>
        <section id='right-nav'>
          {this.userNav()}
        </section>
      </div>
    )
  }
}


export default Navbar;