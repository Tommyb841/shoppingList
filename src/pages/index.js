import React from "react"
import NavBar from "../components/NavBar"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import "../modules/indexStyles.css"
import { Link } from "gatsby"

function IndexPage({ data }) {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="text-container">
          <h1>Go to the shopping list</h1>
          <Link to="/shoppinglist" className="centered-button">
            Shopping List
          </Link>
        </div>
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
