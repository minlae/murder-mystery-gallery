import React from "react"
import MenuCards from "./menu-cards"
const CharLayout = ({ children, char }) => (
  <>
    <MenuCards char={char} />
    {children}
  </>
)
export default CharLayout