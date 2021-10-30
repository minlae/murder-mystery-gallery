import * as React from "react"
import NavBar from "./nav-bar"
import "../styles/global.scss"

const Layout = ({ children }) => (
  <>
    <div className="wrapper">  
      <NavBar />
      {children}
    </div>
  </>
)
export default Layout