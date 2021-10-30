import * as React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import PrivateRoute from "../components/privateRoute"
import Home from "./index"
import SharonS from "./app/sharonS"
import SharonBg from "./app/sharonBg"
import Volunteer from "./app/volunteer"
// import PeteC from "./app/peteC"
// import BrettC from "./app/brettC"
// import LilacL from "./app/lilacL"
// import LuigiL from "./app/luigiL"
// import FionaF from "./app/fionaF"
import Login from "./login"


const App = () => (
  <Layout>
    <Router>
      <Router path="/" component={Home} />
      <PrivateRoute path="/app/sharonS" component={SharonS} />
      <PrivateRoute path="/app/sharonBg" component={SharonBg} />
      <PrivateRoute path="/app/volunteer" component={Volunteer} />
      <Login path="login" />
    </Router>
  </Layout>
)

export default App