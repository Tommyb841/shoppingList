import React from "react"
import HomeButton from "../components/HomeButton"
import NavBar from "../components/NavBar"
import "../modules/aboutStyles.css"
export default function about() {
  return (
    <>
      <NavBar />
      <h1>About</h1>
      <div className="container">
        <p>This is to showcase what I've been learning in React Typescript.</p>
      </div>
    </>
  )
}
