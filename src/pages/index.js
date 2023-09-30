import React from "react"
import NavBar from "../components/NavBar"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import "../modules/indexStyles.css"
import { Link } from "gatsby"

function IndexPage({ data }) {
  console.log(data)
  // const heroImage = data.strapiSiteConfigs.hero.childImageSharp.fluid

  return (
    <>
      <NavBar />
      <div className="container">
        <div className="text-container">
          <h1>Go to the shopping list</h1>
          {/* <Link to="/shoppinglist" className="centered-button">
            Shopping List
          </Link> */}
        </div>
        {/* <Img fluid={heroImage} alt="Hero" /> */}
        {/* <Img className="doge" fluid={data.file.childImageSharp.fluid} alt="" /> */}
      </div>
    </>
  )
}

export default IndexPage
