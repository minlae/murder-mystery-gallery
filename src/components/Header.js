import * as React from "react"

const Header = ({charName}) => {

  return(
    <header>
      <h1>{charName}</h1>
      <h2>Event date: Fri, Nov 12th 6:00pm</h2>
    </header>
  );

}

export default Header