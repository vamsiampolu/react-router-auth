import React, { Component } from 'react'
import auth from '../auth'
import { Link } from 'react-router'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {loggedIn: auth.loggedIn()}
    this.updateAuth = this.updateAuth.bind(this)
  }

  updateAuth (loggedIn) {
    this.setState({ loggedIn})
  }

  componentWillMount () {
    auth.onChange = this.updateAuth
    auth.login()
  }

  render () {
    return (
    <div>
      <ul>
        <li>
          {!this.state.loggedIn ? ( <Link to='/login'> Sign In
                                    </Link>) : (<Link to='/logout'> Logout
                                                </Link>)}
        </li>
        <li>
          <Link to='/about'> About
          </Link>
        </li>
        <li>
          <Link to='/dashboard'> Dashboard
          </Link>
        </li>
      </ul>
      {this.props.children || <p>
                                You are
                                {!this.state.loggedIn && 'not'} authenticated
                              </p>}
    </div>
    )
  }
}

export default App
