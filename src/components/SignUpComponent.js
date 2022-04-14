import React from "react"

function SignUpComponent() {
  return (
    <div className="signUp">
     
      <h1>Unlimited movies, TV shows, and more.</h1>
      <h2>Watch anywhere. Cancel anytime</h2>
      <h3>Ready to watch? Enter your email to create or restart your membership</h3>
<table>
    <tbody>
    <tr>
        <td> <input className="signupBox" type="text" placeholder="Email address" /></td>
        <td><button id="startBtn"> Get Started &#62; </button></td>
    </tr>
    </tbody>
</table>
     
      
    </div>
  )
}

export default SignUpComponent
