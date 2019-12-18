import React from "react"
import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import SEO from "./seo"
import NavBar from 'components/nav_bar'

export default ({ children }) => (
  <div style={{ margin: `3rem auto`, maxWidth: '80%', padding: `0 1rem` }}>
    <SEO />
    <NavBar />
    <header style={{ marginBottom: `1.5rem` }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none`, marginRight: '3rem' }}>
        <h3 style={{ display: `inline` }}>MySweetSite</h3>
      </Link>
      <AniLink paintDrip to="/contact/">
        Go to Page 4
      </AniLink>
    </header>
    {children}
  </div>
)
