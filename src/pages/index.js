import React, { useState } from 'react'
import { Link } from 'gatsby'
import { connect } from 'react-redux';
import { getUser, isLoggedIn } from '../services/auth'
import Layout from '../components/layout'

import { toggleDarkMode, changeSign } from '../store/actions'

const IndexPage = (state) => {
  const [testSign, setTestSign] = useState('')

  const { dispatch } = state

  const { isDarkMode, sign } = state.base

  console.log('state\n', state)
  // console.log('darkmode?\n', isDarkMode)

  function doubleSay (str) {
    return str + ', ' + str;
  }
  function capitalize (str) {
    return str[0].toUpperCase() + str.substring(1);
  }
  function exclaim (str) {
    return str + '!';
  }

  let result = 'hello'
  |> doubleSay
  |> capitalize
  |> exclaim

  // console.log(result)
  return (
    <Layout>
      <h1>Hello {isLoggedIn() ? getUser().name : 'world'}!</h1>
      <p>
        {isLoggedIn() ? (
          <>
            You are logged in, so check your{' '}
            <Link to='/app/profile'>profile</Link>
          </>
        ) : (
          <>
            You should <Link to='/app/login' className='text-2xl' style={{color: 'blue'}}>log in</Link> to see restricted
            content
          </>
        )}
      </p>
      <br />
      <div>{'darkmode: ' + isDarkMode}</div>
      <button onClick={() => dispatch(toggleDarkMode(!isDarkMode))}>
          push me to change darkmode!
      </button>
      <br/>
      <div>{'sign: ' + sign}</div>
      <input type="text" value={testSign} onChange={(e) => setTestSign(e.target.value)}></input>
      <br/>
      <button onClick={() => dispatch(changeSign(testSign))}>
          push me to change the sign!
      </button>
    </Layout>
  )
}

export default connect(state => (state), null)(IndexPage)
