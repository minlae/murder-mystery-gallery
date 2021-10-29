import * as React from "react"
import "../styles/global.scss"
import Layout from "../components/layout"
import { navigate, Link } from "gatsby"
import { getUser, isLoggedIn } from "../services/auth"

//remember run: npm run develop
// styles

// markup
export default function Home() {
  return (
    <Layout>
      <main>
      <h1>Greetings {isLoggedIn() ? getUser().firstname : "Friend"}!</h1>
      <p>
        {isLoggedIn() ? navigate(`/app/${getUser().charname}`) : (
          <>
            You should <Link to="login">log in</Link> to see restricted
            content
          </>
        )}
      </p>
      </main>
    </Layout>
  )
}
