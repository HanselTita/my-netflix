import React from "react"
import SignUpComponent from "../components/SignUpComponent"
import SignUpMenu from "../components/SignUpMenu"

const HomePage = () => {
  return (
    <div className="bg">
      <SignUpMenu />
      <SignUpComponent />
    </div>
  )
}

export default HomePage
