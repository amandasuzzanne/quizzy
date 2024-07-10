import React, { useState } from 'react';
import './Login.css';

const Login = ({ setEmail }) => { // Destructure setEmail from props

  const [signState, setSignState] = useState("Sign In");
  const [userName, setUserName] = useState("");
  const [email, setEmailLocal] = useState("");
  const [password, setPassword] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (signState === "Sign In") {
  //       // Handle sign-in logic here
  //       console.log("Sign In:", { email, password });
  //   } else {
  //       // Handle sign-up logic here
  //       console.log("Sign Up:", { userName, email, password });
  //   }
  //   setEmail(email); // Update the email in the parent component
  // };

  return (
    <div className="login">
       <div className="login-form">
        <h1>{signState}</h1>
        <form id="login-frm">
          {signState ==="Sign Up" ? 
          <input value={userName} name='username' onChange={(e)=>{setUserName(e.target.value)}} type="text" placeholder="User Name"/>:<></>}
          <input value={email} name="email" onChange={(e)=>{setEmailLocal(e.target.value)}} type="email" placeholder="Email" id="email-input"/>
          <input value={password}  onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Password"/>
          <button  type='submit'>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox"/>
              <label htmlFor=''>Remember Me</label>
            </div>
            <p>Need Some Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === "Sign In"?
          <p>New to Quizzy?<span onClick={()=>{setSignState("Sign Up")}}>Sign Up Now!</span></p>
          :<p>Already have an account?<span onClick={()=>{setSignState("Sign In")}}>Sign In</span></p>
        } 
        </div>
       </div>
    </div>
  );
};

export default Login;