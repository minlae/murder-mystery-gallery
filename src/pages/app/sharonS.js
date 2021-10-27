import React from "react"
import { getUser } from "../../services/auth"

const SharonS = () => (
  <>
    <h1>Your character</h1>
    <ul>
      <li>Name: {getUser().firstname}</li>
      <li>Name: {getUser().lastname}</li>
    </ul>
  </>
)

export default SharonS