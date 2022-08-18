import React from "react";
import { Link } from 'react-router-dom';


class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      curTime: ""
    }
    this.userNav = this.userNav.bind(this)
  }
  componentDidMount() {
    this.getTime();
  }

  getTime = () => {
    let today = new Date(),
      curTime = today.getHours();
        // + ':' + today.getMinutes() + ':' + today.getSeconds();
    this.setState({ curTime });
  }

  userNav(){
    return(
    (this.props.currentUser ? (
      <div id='user-nav'>
          <div id='user-name'>
            {this.state.curTime < 12 ? "Good Morning" : ""}
            {this.state.curTime >= 12 && this.state.curTime < 17? "Good Afternoon" : ""}
            {this.state.curTime >= 17 && this.state.curTime < 24 ? "Good Evening" : ""}, {this.props.currentUser.username}! </div>
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
        <section id='left-nav'>
          <div className='left-navlinks'>
            <Link to='/explore' className="left-navbar">Explore</Link>
            <Link to='/' className="left-navbar2">Community</Link>
            <Link to='/' className="left-navbar3">Saved</Link>
            <Link to='/' className="left-navbar4">Shop</Link>
          </div>
        </section>
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