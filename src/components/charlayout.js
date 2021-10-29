import * as React from "react"
import MenuCards from "./menu-cards"
const CharLayout = ({ children }) => (
  <>
    <MenuCards />
    {children}
  </>
)
export default CharLayout