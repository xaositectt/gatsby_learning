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
