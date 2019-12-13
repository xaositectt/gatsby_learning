import React from "react"
import { Link } from "gatsby"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default () => (
  <div
    style={{
      display: "flex",
      flex: "1",
      justifyContent: "space-between",
      borderBottom: "1px solid #d1c1e0",
      marginBottom: `3rem`
    }}
  >
    <span>You are not logged in</span>

    <nav>
      <ListLink to="/">Home</ListLink>
      <ListLink to="/about/">About</ListLink>
      <ListLink to="/contact/">Contact</ListLink>
      <ListLink to="/characters/">Characters</ListLink>
      <ListLink to="/">Profile</ListLink>
      <ListLink to="/">Logout</ListLink>
    </nav>
  </div>
)
