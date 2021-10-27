import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import PrivateRoute from "../components/privateRoute"
import Profile from "./app/profile"
import SharonS from "./app/sharonS"
import Login from "./login"

const App = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/app/profile" component={Profile} />
      <PrivateRoute path="/app/sharonS" component={SharonS} />
      <Login path="login" />
    </Router>
  </Layout>
)

export default App