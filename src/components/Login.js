import React, { Component } from 'react'
import { withRouter } from 'react-router'
import auth from '../auth'

class Login extends Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      error: false
    }
  }

  handleSubmit (e) {
    e.preventDefault()
    let email = this.refs.email.value
    let pass = this.refs.pass.value
    auth.login(email, pass, (loggedIn) => {
      if (!loggedIn) {
        return this.setState({error: true})
      }
      const { location } = this.props
      if (location.state && location.state.nextPathName) {
        this.props.router.replace(location.state.nextPathName)
      } else {
        this.props.router.replace('/')
      }
    })
  }

  render () {
    return (
    <form onSubmit={this.handleSubmit}>
      <label>
        <input ref="email" placeholder="email" defaultValue="joe@example.com" />
      </label>
      <label>
        <input ref="pass" placeholder="password" />
      </label> (hint: password1)
      <br />
      <button type="submit">
        login
      </button>
      {this.state.error && (
       <p>
         Bad login information
       </p>
       )}
    </form>
    )
  }
}

export default withRouter(Login)
