import * as React from "react"
import PlotSummary from "./plotSummary"

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
        <ul>
          <li id="plot" class="module">
             <PlotSummary />
          </li>
          <li>Speaking Order</li>
          <li>What to Say</li>
          <li id="background" class="module">Background</li>
          <li>Clues</li>
        </ul>
      </nav>
      </>

    )
  }
}

export default MenuCards
