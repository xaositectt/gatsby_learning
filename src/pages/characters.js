import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import ImageList from "../components/image_list"
// import image_1 from '../images/1.jpg'
// import image_2 from '../images/2.jpg'
// import image_3 from '../images/3.jpg'


// const images = [image_1, image_2, image_3]

export default ({data}) => {
  const queriedImages = data.allFile.edges.map(node => node.node.childImageSharp.fluid)

  console.log(queriedImages)

  return (
    <Layout>
      <h1>Characters</h1>
      <ImageList images={queriedImages}/>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile(filter: {name: {regex: "/^[0-9]+$/"}}) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 150, maxHeight: 150) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
