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
      charname: `peteC`,
      firstname: `Pete`,
      lastname: `Casso`,
      charBg: `peteBg`
    })
    case 'dwile':
      return setUser({
        charname: `sharonS`,
        firstname: `Sharon`,
        lastname: `Sharalike`,
        charBg: `sharonBg`
      })
      case 'raincap':
      return setUser({
        charname: `brettC`,
        firstname: `Brett`,
        lastname: `Cutler`,
        charBg: `brettBg`
      })
      case 'weatherly':
      return setUser({
        charname: `lilacL`,
        firstname: `Liliac`,
        lastname: `Labelle`,
        charBg: `lilacBg`
      })
      case 'flintwinch':
      return setUser({
        charname: `fionaF`,
        firstname: `Fiona`,
        lastname: `Fakes`,
        charBg: `fionaBg`
      })
      case 'stormcrow':
        return setUser({
          charname: `luigiL`,
          firstname: `Luigi`,
          lastname: `Lambrusco`,
          charBg: `luigiBg`
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