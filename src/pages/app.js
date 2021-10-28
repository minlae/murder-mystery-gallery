import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import PrivateRoute from "../components/privateRoute"
import Profile from "./app/profile"
import SharonS from "./app/sharonS"
import SharonBg from "./app/characterBgs/sharonBg"
import PeteC from "./app/peteC"
import BrettC from "./app/brettC"
import LilacL from "./app/lilacL"
import LuigiL from "./app/luigiL"
import FionaF from "./app/fionaF"
import Login from "./login"

const App = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/app/profile" component={Profile} />
      <PrivateRoute path="/app/sharonS" component={SharonS} />
      <PrivateRoute path="/app/characterBgs/sharonBg" component={SharonBg} />
      <Login path="login" />
    </Router>
  </Layout>
)

export default App