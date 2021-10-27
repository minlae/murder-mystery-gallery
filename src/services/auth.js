export const isBrowser = () => typeof window !== "undefined"

export const getUser = () =>
  isBrowser() && window.localStorage.getItem("gatsbyUser")
    ? JSON.parse(window.localStorage.getItem("gatsbyUser"))
    : {}

const setUser = user =>
  window.localStorage.setItem("gatsbyUser", JSON.stringify(user))

export const handleLogin = ({ password }) => {
  switch (password) {
    case 'funereus':
    return setUser({
      charname: `peteCasso`,
      firstname: `Pete`,
      lastname: `Casso`
    })
    case 'dwile':
      return setUser({
        charname: `sharonSharalike`,
        firstname: `Sharon`,
        lastname: `Sharalike`
      })
      case 'lastage':
      return setUser({
        charname: `brettCutler`,
        firstname: `Brett`,
        lastname: `Cutler`
      })
      case 'weatherly':
      return setUser({
        charname: `lilacLabelle`,
        firstname: `Liliac`,
        lastname: `Labelle`
      })
      case 'flintwinch':
      return setUser({
        charname: `fionaFakes`,
        firstname: `Fiona`,
        lastname: `Fakes`
      })
      case 'stormcrow':
        return setUser({
          charname: `luigiLambrusco`,
          firstname: `Luigi`,
          lastname: `Lambrusco`
        })
    default:
  }
  return false
}

export const isLoggedIn = () => {
  const user = getUser()

  return !!user.charname
}

export const logout = callback => {
  setUser({})
  callback()
}