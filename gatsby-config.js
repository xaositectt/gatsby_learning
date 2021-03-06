const path = require('path')

module.exports = {
  siteMetadata: {
    title: `Images`,
    description: `A website testing the gatsby images`,
    author: `xaositectt`,
    siteUrl: `https://www.images.com`
  },
  plugins: [
    // {
    //   resolve: `gatsby-plugin-typography`,
    //   options: {
    //     pathToConfigModule: `src/utils/typography`
    //   },
    // },
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
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/app/*`] },
    },
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyzer',
      options: {
        analyzerPort: 3000
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        components: path.join(__dirname, 'src/components')
      }
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        postCssPlugins:  [require('tailwindcss')]
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-source-shopify`,
      options: {
        shopName: `whatevs-dude`,
        accessToken: `5c76b5d0bb3775b2de714ee69a338d21`,
      },
    },
  ],
}
