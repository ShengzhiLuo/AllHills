import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleDemo = this.handleDemo.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }
    
   handleDemo() {
       return this.props.processForm({
           username: 'demo',
           password: 'password'
       });
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`} id ='error'>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className='login-backgroud'>
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
            <p id="login-info" >Log in and let's get going</p>
            <br/>
          <div className="login-form">
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                  className="login-input"
                  placeholder='Username'
              />
            <br />
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                  className="login-input"
                  placeholder='Password'
              />
            {this.renderErrors()}
              <input className="session-submit" type="submit" value={this.props.formType} />
              <br/>
            <div id = 'login-bottom'>
                <p>Don't have an account?<Link to="/signup" className='navlink-login'> Sign Up Here</Link> </p>

                <p>or</p>

                <span>Log in with 
                    <Link to = "/" className = 'demo-login' onClick = {this.handleDemo} > Demo User</Link>
                </span>
            </div>
        </div>
      </form>
      </div>
      </div>
    );
  }
}

export default LoginForm;
