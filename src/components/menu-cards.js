import React from "react"
import { Link } from "gatsby"

class MenuCards extends React.Component {
  render() {
    //if you are on the page, it should no longer be a link
    //how do you know if you are on the page?
    const charBg = this.props.char;
    const page = this.props.page;
    // const propsExist = () => {
    //   return !!charBg
    // }

    return(
      <>
      <nav>
        <ul>
          <li>
            {/* {propsExist() ? 
            (
              <> */}
                <Link to={`../../plotSummary`}>Plot Summary</Link>
              {/* </>
            ) : ( <> Plot summary</>)
            } */}
          </li>
          <li>Speaking Order</li>
          <li>What to Say</li>
          <li>
            {/* {propsExist() ? 
            (
              <> */}
                <Link to={`../../app/characterBgs/${charBg}`}>Background</Link>
              {/* </>
            ) : ( <> Character Background</>) */}
            {/* } */}
            </li>
          <li>Clues</li>
        </ul>
      </nav>
      </>

    )
  }
}

export default MenuCards
