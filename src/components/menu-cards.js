import * as React from "react"
import { Link } from "gatsby"

class MenuCards extends React.Component {


  render() {
    //if you are on the page, it should no longer be a link
    //how do you know if you are on the page?
    //if page is same page as link, don't display link
    // const propsExist = () => {
    //   return !!charBg
    // }

    return(
      <>
      <nav>
          {/* Plot summary is the main page */}
          {/* Use hidden modules for the sub-menus */}
          <ul>
            <li><Link to="/app/sharonS">Plot Summary</Link></li>
            <li><Link to="/app/sharonBg">Character Details</Link></li>
            <li><Link to="/app/volunteer">Volunteer Info</Link></li>
          </ul>
        </nav>
      </>

    )
  }
}

export default MenuCards
