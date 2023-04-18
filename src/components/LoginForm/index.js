// Write your JS code here
import {Component} from 'react'

import './index.css'

const url = 'https://apis.ccbp.in/login'

class LoginForm extends Component {
  state = {username: '', password: '', errorMessage: ''}

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const {history} = this.props
      history.replace('/')
    } else {
      const data = await response.json()
      const errorMsg = data.error_msg
      this.setState({errorMessage: errorMsg})
    }
  }

  onChangeUsername = event => this.setState({username: event.target.value})

  onChangePassword = event => this.setState({password: event.target.value})

  render() {
    const {username, password, errorMessage} = this.state
    return (
      <div className="login-form-bg-container">
        <div className="login-form-content-container">
          <img
            className="login-form-website-logo"
            alt="website logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          />
          <img
            className="login-form-image"
            alt="website login"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          />
          <form className="form" onSubmit={this.onSubmitForm}>
            <img
              className="login-form-website-logo-desktop"
              alt="website logo"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            />
            <label className="label" htmlFor="username">
              USERNAME
            </label>
            <input
              className="input-element"
              id="username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={this.onChangeUsername}
            />
            <label className="label" htmlFor="password">
              PASSWORD
            </label>
            <input
              className="input-element"
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={this.onChangePassword}
            />
            <button className="login-button" type="submit">
              Login
            </button>
            <p className="error-message">{errorMessage}</p>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
