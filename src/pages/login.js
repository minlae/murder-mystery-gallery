import * as React from "react"
import { navigate } from "gatsby"
import { handleLogin, isLoggedIn, getUser } from "../services/auth"
import "normalize.css"
import Layout from "../components/layout"
import "../styles/global.scss"
import "../styles/index.modules.scss"


class Login extends React.Component {
  state = {
    charname: ``,
    password: ``,
  }
  componentDidMount() {
    console.log(isLoggedIn());
  }

  handleUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    handleLogin(this.state)
    // move to login page ONLY if isLoggedIn is true
    if (isLoggedIn()) {
      navigate(`/app/volunteer`)
    } 
  }

  render() {
    if (isLoggedIn()) {
      navigate(`/app/volunteer`)
    } 

    return (
      <>
        <Layout>
          <h1 className="login">Log in</h1>
          <div className="login-field">
            <form
              method="post"
              onSubmit={event => {
                this.handleSubmit(event)
              }}
            >
              <label>
                passcode
              </label>
              <input
                  type="password"
                  name="password"
                  onChange={this.handleUpdate}
                />
              <input className="submit" type="submit" value="Log In" />
            </form>
          </div>
        </Layout>
      </>
    )
  }
}

export default Login