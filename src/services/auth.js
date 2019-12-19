export const isBrowser = () => typeof window !== "undefined"

export const getUser = () => {
  if (isBrowser()) {
    const user = window.localStorage.getItem("gatsbyUser")
    return user ? JSON.parse(user) : {}
  } else {
    return {}
  }
}

const setUser = user => window.localStorage.setItem("gatsbyUser", JSON.stringify(user))

// hard coded data, get the info out of DB and shit later
export const handleLogin = ({ username, password }) => {
  if (username === `john` && password === `pass`) {
    return setUser({
      username: `john`,
      name: `Johnny`,
      email: `johnny@example.org`,
    })
  }
  return false
}

export const isLoggedIn = () => {
  const user = getUser()
  return !!user.username
}

export const logout = callback => {
  setUser({})
  callback()
}
