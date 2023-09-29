import React from "react"
import { Link } from "gatsby"
// import item from './modules/item'
function IndexPage() {
  return (
    <>
      <h1>This is the index page to diffent components</h1>
      <Link to="/shoppinglist">Shopping List</Link>
      <br />
      <Link to="/typegen">Type Generator</Link>
      <br />
      <Link to="/about">About</Link>
    </>
  )
}

export default IndexPage
