import * as React from "react"
import { navigate } from "gatsby"
import { getUser, isLoggedIn, logout } from "../services/auth"

export default function NavBar() {
  let greetingMessage = ""
  if (isLoggedIn()) {
    greetingMessage = `Files for ${getUser().firstname} ${getUser().lastname}`
  } else {
    greetingMessage = "Welcome, guest"
  }
  return (
    <div className="mainNav"
      style={{
        display: "flex",
        flex: "1",
        justifyContent: "space-between",
        borderBottom: "1px solid #615960",
      }}
    >
      <span>{greetingMessage}</span>
      <nav>
        Event date: Fri, Nov 12th 6:00pm {"  "} | {"  "} 
        {isLoggedIn() ? (
          <a
            href="/"
            onClick={event => {
              event.preventDefault()
              logout(() => navigate(`/`))
            }}
          >
            Logout
          </a>
        ) : null}
      </nav>
    </div>
  )
}