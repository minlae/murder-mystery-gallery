import * as React from "react"
import { navigate } from "gatsby"
import { handleLogin, isLoggedIn, getUser } from "../services/auth"
import Layout from "../components/layout"


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
          <h1>Log in</h1>
          <form
            method="post"
            onSubmit={event => {
              this.handleSubmit(event)
            }}
          >
            <label>
              Password
              <input
                type="password"
                name="password"
                onChange={this.handleUpdate}
              />
            </label>
            <input type="submit" value="Log In" />
          </form>
        </Layout>
      </>
    )
  }
}

export default Login