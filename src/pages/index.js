import * as React from "react"
import Layout from "../components/layout"
import { navigate, Link } from "gatsby"
import { getUser, isLoggedIn } from "../services/auth"
import "../styles/global.scss"
import "../styles/index.modules.scss"


//remember run: npm run develop
// styles

// markup
export default function Home() {
  return (
    <Layout>
      <main className="index">
      <h1>Murder at the Art Gallery</h1>
      {/* <h1>Welcome, {isLoggedIn() ? getUser().firstname : "Friend"}!</h1> */}
      <p>
        {isLoggedIn() ? navigate(`/app/${getUser().charname}`) : (
          <>
            <Link to="login">Click here to log in</Link> and see your character information
          </>
        )}
      </p>
      </main>
    </Layout>
  )
}
