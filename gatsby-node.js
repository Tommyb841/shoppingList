/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}
exports.sourceNodes = ({ actions }) => {
  const { createTypes } = actions

  const typeDefs = `
    type StrapiSiteConfigs implements Node {
      hero: File @link(by: "relativePath")
    }

    type File implements Node {
      childImageSharp: ImageSharp
    }

    type ImageSharp {
      fluid(maxWidth: Int): ImageSharpFluid
    }

    type ImageSharpFluid {
      aspectRatio: Float
      base64: String
      sizes: String
      src: String
      srcSet: String
    }
  `

  createTypes(typeDefs)
}
