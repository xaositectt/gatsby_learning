import React from "react"
import { Link, navigate } from "gatsby"
import { getUser, isLoggedIn, logout } from "../services/auth"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default () => {
  const content = { message: "", login: true }
  if (isLoggedIn()) {
    content.message = `Hello, ${getUser().name}`
  } else {
    content.message = "You are not logged in"
  }
  return (
    <div
      style={{
        display: "flex",
        flex: "1",
        justifyContent: "space-between",
        borderBottom: "1px solid #d1c1e0",
        marginBottom: `3rem`
      }}
    >
      <span>{content.message}</span>

      <nav>
        <ListLink to="/">Home</ListLink>
        {/* <ListLink to="/app/profile">Profile</ListLink> */}
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/products/">Products</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
        <ListLink to="/characters/">Characters</ListLink>
        <ListLink to="/">Profile</ListLink>
        {isLoggedIn() ? (
          <a
            href="/"
            onClick={event => {
              event.preventDefault()
              logout(() => navigate(`/app/login`))
            }}
          >
            Logout
          </a>
        ) : null}
      </nav>
    </div>
  )
}
