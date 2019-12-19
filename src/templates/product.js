import React from "react"

import Layout from "../components/layout"

const ProductTemplate = ({ pageContext }) => {
  const { product } = pageContext

  console.log(product)
  return (
    <Layout>
      <h1>{product.title}</h1>
      <div>{product.description}</div>
      <img src={product.images[0].originalSrc}/>
    </Layout>
  )
}

export default ProductTemplate
