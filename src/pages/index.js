import * as React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { getUser, isLoggedIn } from "../services/auth"

//remember run: npm run develop
// styles
const pageStyles = {
  backgroundColor: "#191970",
  color: "#FFFFFF",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

// markup
export default function Home() {
  return (
    <Layout>
      <h1>Hello {isLoggedIn() ? getUser().name : "world"}!</h1>
      <p>
        {isLoggedIn() ? (
          <>
            You are logged in, so check your{" "}
            <Link to="/app/profile">profile</Link>
          </>
        ) : (
          <>
            You should <Link to="login">log in</Link> to see restricted
            content
          </>
        )}
      </p>
    </Layout>
  )
}
// class IndexPage extends React.Component {

//   myInput = React.createRef();
//   //functions
//   enterMyPage = (e) => {
//     e.preventDefault();
//     const myCodeword = this.myInput.current.value;
//     const acceptedCodes = ["investigator", "pc-funereus", "ss-dwile", "bc-lastage", "ll-weatherly", "ff-flintwinch", "ll-stormcrow"];

//     if (acceptedCodes.includes(myCodeword)) {
//       navigate(`characters/${myCodeword}`);
//     } else {
//       navigate(`notfound`);
//     }
//   }
//   render() {
//     return (
//     <>
//       <main style={pageStyles}>
//         <title>Murder at the Art Gallery</title>
//         <h1 className={headingStyles}>Welcome, Friend</h1>
//         <form onSubmit={this.enterMyPage}>
//           <p className={paragraphStyles}>Please enter your codeword</p>
//           <input type="text" required placeholder="codeword" ref={this.myInput}/>
//           <button type="submit">Enter</button>
//         </form>
//       </main>
//       </>
//     )
//   }
// }

// export default IndexPage
