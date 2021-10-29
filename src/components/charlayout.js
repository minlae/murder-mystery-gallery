import * as React from "react"
import MenuCards from "./menu-cards"
const CharLayout = ({ children, plotLink, charBg }) => (
  <>
    <MenuCards plotLink={plotLink} charBg={charBg} />
    {children}
  </>
)
export default CharLayout