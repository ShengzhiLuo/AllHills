import React from 'react';
import {Link} from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`} id = 'error'>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="signup-form-container">
        <form onSubmit={this.handleSubmit} className="signup-form-box">
          <br />
          <p id="signup-info">Create your free account</p>
          <br/>
          <div className="signup-form">
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="signup-input"
                placeholder='Username'
              />
              <input
                type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="signup-input"
                placeholder='Email Address'
              />
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="signup-input"
                placeholder='Password'
              />
            {this.renderErrors()}
            <input className="session-submit" type="submit" value={this.props.formType} />
            <br/>
            <div id = 'signup-bottom'>
            <p>Already have an account? <Link to="/login" className='navlink-signup'>Log In Here</Link> </p>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SignupForm;
