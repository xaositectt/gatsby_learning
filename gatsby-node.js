exports.onCreatePage = async ({page, actions}) => {
  console.log(page)
  console.log(actions)
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
