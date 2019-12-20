import React from "react"
import { Router, Link, navigate } from "@reach/router"
import Layout from "../components/layout"


const RouterTest = () => (
  <Layout>
    <nav>
      <Link to="router_test/one/paige">one</Link>
      <br></br>
      <Link to="router_test/two/monifa">two</Link>
      <br></br>
      <Link to="router_test/two">two subindex</Link>
      <br></br>
      <Link to="router_test/two/one/yahhahaha">two one</Link>
      <br></br>
      <Link to="router_test/two/two/yeeeeeeeech">two two</Link>
      <br></br>
      <br></br>
      <br></br>
    </nav>
    <div style={{backgroundColor: 'lightgray'}}>
      <div>this is a dynamic router</div>
      <Router>
        <NotFound default />
        <One path="/router_test/one/:what" />
        <Two path="/router_test/two/">
          <TwoIndex path="/"/>
          <TwoOne path="one/:wut"/>
          <TwoTwo path="two/:what"/>
        </Two>
      </Router>
    </div>
  </Layout>
)

const One = ({what}) => (
  <div>
    <h2>{'the route param is: ' + what }</h2>
  </div>
)

const Two = ({ children}) => (
  <div>
    <h2>this is the two</h2>
    {children}
  </div>
)

const TwoIndex = () => {
  return (
    <div>
      <div>this is what you see when no subroute is given.</div>
    </div>
  )
}
const TwoOne = ({wut}) => {
  return (
    <div>
      <div>this is the two one one one</div>
      <div>{'the what is ' + wut}</div>
    </div>
  )
}

const TwoTwo = ({what}) => {
  return (
    <div>
      <div>this is the two two two two</div>
      <div>{'the what is ' + what}</div>
      <button onClick={() => navigate('/')}>
        navigate to homepage
      </button>
    </div>
  )
}

const NotFound = () => <p>subpage not found</p>

export default RouterTest
