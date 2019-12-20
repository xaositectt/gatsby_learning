const path = require(`path`)

exports.onCreatePage = async ({page, actions}) => {
  // console.log(page)
  // console.log(actions)
  const { createPage } = actions
  // check route with regex
  //   page.matchPath = "/app/*"
  //   // Update the page.
  //   createPage(page)
  // }

  if (page.path.match(/^\/router_test/)) {
    page.matchPath = "/router_test/*"

    // Update the page.
    createPage(page)
  }
  const dogData = [
    {
      name: "Fido",
      breed: "Sheltie",
    },
    {
      name: "Sparky",
      breed: "Corgi",
    }
  ]

  dogData.forEach(dog => {
    createPage({
      path: `/${dog.name}`,
      component: require.resolve(`./src/templates/dog-template.js`),
      context: dog
    })
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // Query for all products in Shopify
  const result = await graphql(`
    query {
      allShopifyProduct(sort: { fields: [title] }) {
        edges {
          node {
            title
            images {
              originalSrc
            }
            shopifyId
            handle
            description
            availableForSale
            priceRange {
              maxVariantPrice {
                amount
              }
              minVariantPrice {
                amount
              }
            }
          }
        }
      }
    }
  `)
  // Iterate over all products and create a new page using a template
  // The product "handle" is generated automatically by Shopify
  result.data.allShopifyProduct.edges.forEach(({ node }) => {
    createPage({
      path: `/product/${node.handle}`,
      component: require.resolve(`./src/templates/product.js`),
      context: {
        product: node,
      }
    })
  })
}

exports.onCreateWebpackConfig = async ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  // console.log('the stage is ', stage)
  // console.log('the rules are ', rules)
  // console.log('the loaders are ', loaders)
  // console.log('the plugins are ', plugins)
  // console.log('the actions are ', actions)
  actions.setWebpackConfig({
    resolve: {
      alias: {
        assets: path.resolve(__dirname, 'src/assets')
      }
    }
  })
}
