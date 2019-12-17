import React from "react"
import { Link } from "gatsby"
import { getUser, isLoggedIn } from "../services/auth"
import Layout from "../components/layout"

export default () => {
  function doubleSay (str) {
    return str + ", " + str;
  }
  function capitalize (str) {
    return str[0].toUpperCase() + str.substring(1);
  }
  function exclaim (str) {
    return str + '!';
  }

  let result = "hello"
  |> doubleSay
  |> capitalize
  |> exclaim

  console.log(result)
  return (
    <Layout>
      <h1>Hello {isLoggedIn() ? getUser().name : "world"}!</h1>
      <p>
        {isLoggedIn() ? (
          <>
            You are logged in, so check your{" "}
            <Link to="/app/profile">profile</Link>
          </>
        ) : (
          <>
            You should <Link to="/app/login" className="text-2xl" style={{color: 'blue'}}>log in</Link> to see restricted
            content
          </>
        )}
      </p>
    </Layout>
  )
}
