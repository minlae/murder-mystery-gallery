import * as React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import PrivateRoute from "../components/privateRoute"
import Home from "./index"
import SharonS from "./app/sharonS"
import SharonBg from "./app/sharonBg"
import Volunteer from "./app/volunteer"
import PeteC from "./app/peteC"
import PeteBg from "./app/peteBg"
// import BrettC from "./app/brettC"
// import LilacL from "./app/lilacL"
// import LuigiL from "./app/luigiL"
// import FionaF from "./app/fionaF"
import Login from "./login"

// Include routes for not found pages or redirect to char page.


const App = () => (
  <Layout>
    <Router>
      <Router path="/" component={Home} />
      <PrivateRoute path="/app/sharonS" component={SharonS} />
      <PrivateRoute path="/app/sharonBg" component={SharonBg} />
      <PrivateRoute path="/app/peteC" component={PeteC} />
      <PrivateRoute path="/app/peteBg" component={PeteBg} />
      <PrivateRoute path="/app/volunteer" component={Volunteer} />
      <Login path="login" />
    </Router>
  </Layout>
)

export default App