import * as React from "react"
import { Link } from "gatsby"
import "../styles/menucards.modules.scss"


class MenuCards extends React.Component {

  render() {
    const plotLink = this.props.plotLink;
    const charBg = this.props.charBg;
    return(
      <>
      <nav>
          {/* Plot summary is the main page */}
          {/* Use hidden modules for the sub-menus */}
          <ul className="menucard-nav">
            <li>
              <Link to={`/app/${plotLink}`}>
                <div className="folder"></div>
                <span className="copy">Plot Summary</span>
              </Link>
            </li>
            <li>
              <Link to={`/app/${charBg}`}>
                <div className="folder"></div>
                <span className="copy">Your Character</span>
              </Link>
            </li>
            <li>
              <Link to="/app/volunteer">
                <div className="folder"></div>
                <span className="copy">How to Play</span>
              </Link>
            </li>
          </ul>
        </nav>
      </>

    )
  }
}

export default MenuCards
