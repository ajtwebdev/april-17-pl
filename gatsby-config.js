/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "Landscaper Calgary | Project Landscape Ltd.",
    titleTemplate: "%s",
    description:
      "Your home is your pride and joy, and we are the professionals who can help you maintain its outdoor beauty.",
    url: "https://www.projectlandscape.ca", // No trailing slash allowed!
    siteUrl: "https://www.projectlandscape.ca",
    image: "/logo-dark.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-compression`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "@chakra-ui/gatsby-plugin",
      options: {
        /**
         * @property {boolean} [resetCSS=true]
         * if false, this plugin will not use `<CSSReset />
         */
        resetCSS: true,
        /**
         * @property {boolean} [isUsingColorMode=true]
         * if false, this plugin will not use <ColorModeProvider />
         */
        isUsingColorMode: true,
        /**
         * @property {boolean} [isBaseProvider=false]
         * if true, will render `<ChakraBaseProvider>`
         */
        isBaseProvider: false,
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "http://www.21-pl.purpleparrotwebsites.com/graphql",
        html: {
          imageMaxWidth: 1024,
        },
        schema: {
          timeout: 60000,
        },
      },
    },
    {
      resolve: "gatsby-plugin-no-sourcemaps",
    },
    `gatsby-plugin-perf-budgets`,
  ],
}
