module.exports = {
  siteMetadata: {
    title: `Images`,
    description: `A website testing the gatsby images`,
    author: `xaositectt`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Images`,
        short_name: `Images`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        display: `standalone`,
        icon: `src/images/avatar.png`
      },
    },
    `gatsby-plugin-offline`,
    { resolve: `gatsby-source-filesystem`, options: { path: `./src/images/avatars` } },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
