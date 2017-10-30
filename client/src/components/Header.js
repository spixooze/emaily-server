import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return
      case false:
        return (
          <a className="button is-primary is-outlined" href="auth/google">
            Login With Google
          </a>
        )

      default:
        return (
          <a className="button is-info is-outlined" href="api/logout">
            Logout
          </a>
        )
    }
  }

  render() {
    return (
      <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <Link to={this.props.auth ? '/surveys' : '/'} className="navbar-item">
            <span className="title is-size-4">Emaily</span>
          </Link>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              textAlign: 'right',
              marginLeft: 'auto',
              marginRight: '10px'
            }}
          >
            {this.renderContent()}
          </div>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth }
}

export default connect(mapStateToProps)(Header)
