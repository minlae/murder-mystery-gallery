import React from "react"
import MenuCards from "./menu-cards"
const CharLayout = ({ children, page }) => (
  <>
    <MenuCards char={char} page={page} />
    {children}
  </>
)
export default CharLayout