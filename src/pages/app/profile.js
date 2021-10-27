import React from "react"
import { getUser, isLoggedIn } from "../../services/auth"

const Profile = () => (
  <>
    <h1>Your profile</h1>
    <ul>
      <li>Name: {getUser().firstname}</li>
      <li>Name: {getUser().lastname}</li>
    </ul>
  </>
)

export default Profile