import React from "react"
import { Link } from "gatsby"
import SEO from "./seo"
import NavBar from './nav_bar'

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
  <div style={{ margin: `3rem auto`, maxWidth: '80%', padding: `0 1rem` }}>
    <SEO />
    <NavBar />
    <header style={{ marginBottom: `1.5rem` }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline` }}>MySweetSite</h3>
      </Link>
    </header>
    {children}
  </div>
)
