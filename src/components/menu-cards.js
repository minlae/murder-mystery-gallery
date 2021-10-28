import React from "react"
import { Link } from "gatsby"

class MenuCards extends React.Component {
  render() {
    //navigation depends on the character. the link will have to link to a variable. Or reconfigure if that's not possible
    //first get it working for Sharon. Where does it link to? Got it!
    ///app/characterBgs/sharonBg
    const charBg = this.props.char;
    // console.log(`props: ${JSON.stringify(charBg)}`);

    return(
      <>
      <nav>
        <ul>
          <li>
            <Link to={`../../app/characterBgs/${charBg}`}>Plot Summary</Link>
          </li>
          <li>Speaking Order</li>
          <li>What to Say</li>
          <li>Character</li>
          <li>Clues</li>
        </ul>
      </nav>
      </>

    )
  }
}

export default MenuCards
