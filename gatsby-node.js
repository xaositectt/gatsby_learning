exports.onCreatePage = async ({page, actions}) => {
  console.log(page)
  console.log(actions)
  const { createPage } = actions
  // if (page.path.match(/^\/app/)) {
  //   page.matchPath = "/app/*"
  //   // Update the page.
  //   createPage(page)
  }
}
