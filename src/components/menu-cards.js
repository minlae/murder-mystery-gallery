import * as React from "react"
import { Link } from "gatsby"


class MenuCards extends React.Component {

  render() {
    const plotLink = this.props.plotLink;
    const charBg = this.props.charBg;
    
    return(
      <>
      <nav>
          {/* Plot summary is the main page */}
          {/* Use hidden modules for the sub-menus */}
          <ul>
            <li><Link to={`/app/${plotLink}`}>Plot Summary</Link></li>
            <li><Link to={`/app/${charBg}`}>Character Details</Link></li>
            <li><Link to="/app/volunteer">Volunteer Info</Link></li>
          </ul>
        </nav>
      </>

    )
  }
}

export default MenuCards
