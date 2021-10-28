import * as React from "react"
import Layout from "../components/layout"
import { navigate, Link } from "gatsby"
import { getUser, isLoggedIn } from "../services/auth"

//remember run: npm run develop
// styles

// markup
export default function Home() {
  return (
    <Layout>
      <h1>Greetings {isLoggedIn() ? getUser().firstname : "Friend"}!</h1>
      <p>
        {isLoggedIn() ? navigate(`/app/${getUser().charname}`) : (
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
