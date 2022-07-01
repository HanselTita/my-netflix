import React from "react"
import logo from "../components/images/logo.png"

const SignUpMenu = () => {
  return (
    <div className="row">
      <div className="column">
        <img src={logo} alt="logo" height="150" width="300" />
      </div>
      <div className="column">
        <button className="signIn" style={{ float: "right", marginRight: "5%" }}>
          Sign In
        </button>
      </div>
    </div>
  )
}

export default SignUpMenu
