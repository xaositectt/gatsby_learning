import React from "react"
import { graphql } from 'gatsby'
import styled from "styled-components"
import Layout from "../components/layout"
import ImageList from "../components/image_list"
import Annah from 'assets/annah.png'

const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Avatar = styled.img`
  flex: 0 0 96px;
  width: 96px;
  height: 96px;
  margin: 0;
`
const Username = styled.h2`
  margin: 0 0 12px 0;
  padding: 0;
`

// import image_1 from '../images/1.jpg'
// import image_2 from '../images/2.jpg'
// import image_3 from '../images/3.jpg'


// const images = [image_1, image_2, image_3]

const User = props => (
  <>
    <Avatar src={props.avatar} alt={props.username} />
    <Username className="lovely-fabulous">{props.username}</Username>
  </>
)

export default ({data}) => {
  const smallQueriedImages = data.small_avatars.edges.map(node => node.node.childImageSharp.fluid)
  const largeQueriedImages = data.large_avatars.edges.map(node => node.node.childImageSharp.fluid)

  console.log(smallQueriedImages)
  console.log(largeQueriedImages)
  console.log(process.env.SOMETHING)

  return (
    <Layout>
      <h1>Characters</h1>
      <ImageList images={smallQueriedImages}/>
      <ImageList images={largeQueriedImages}/>

      <Container>
        <h1>About Styled Components</h1>
        <p>Styled Components is cool</p>
        <User
          username="Jane Doe"
          avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
        />
        <User
          username="Bob Smith"
          avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
        />
        <User
          username="Annah"
          avatar={Annah}
        />
      </Container>

    </Layout>
  )
}

export const query = graphql`
  query {
    small_avatars: allFile(filter: {name: {regex: "/^[0-9]+$/"}}) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 10, maxHeight: 10) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    large_avatars: allFile(filter: {name: {regex: "/^[0-9]+$/"}}) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 250, maxHeight: 250) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }

  }
`
