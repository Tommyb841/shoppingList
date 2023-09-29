import React from "react"
import NavBar from "../components/NavBar"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import "../modules/indexStyles.css"
function IndexPage({ data }) {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1>This is the index page to different components</h1>
        <Img className="doge" fluid={data.file.childImageSharp.fluid} alt="" />
      </div>
    </>
  )
}

export default IndexPage
export const query = graphql`
  query {
    file(relativePath: { eq: "doge.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
