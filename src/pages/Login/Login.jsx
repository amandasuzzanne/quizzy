import React, { useState } from 'react';
import './Login.css';
// import './script.js';

const Login = ({ setEmail }) => { // Destructure setEmail from props

  const [userName, setUserName] = useState("");
  const [email, setEmailLocal] = useState("");
  const [password, setPassword] = useState("");
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={`container ${isActive ? 'active' : ''}`} id="container">
      <div className="form-container sign-up">
        <form>
          <h1>Create Account</h1>
          <span>Register with Email</span>
          <input type="text" placeholder="Username" value={userName} onChange={(e) => setUserName(e.target.value)} />
          <input type="text" placeholder="Email" value={email} onChange={(e) => setEmailLocal(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button>Sign Up</button>
        </form>
        
      </div>

      <div className="form-container sign-in">
        <form>
          <h1>Sign In</h1>
          <span>Sign in with Email</span>
          <input type="text" placeholder="Email" value={email} onChange={(e) => setEmailLocal(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button>Sign In</button>
          {/* <a href="#" className="forgot-password">Forgot Password?</a> */}
        </form>
      </div>

      <div className="toggle-container">
            <div className="toggle">
                <div className="toggle-panel toggle-left">
                    <h1>Quizzy🌶️</h1>
                    <p>The World's Best Quiz App. Ever.</p>
                    <button className="hidden" id="login" onClick={() => {setIsActive(false)}}>Sign In</button>
                </div>
                <div className="toggle-panel toggle-right">
                    <h1>Quizzy🫶🏾</h1>
                    <p>The World's Best Quiz App. Ever.</p>
                    <button className="hidden" id="register" onClick={() =>{setIsActive(true)}}>Sign Up</button>
                </div>
            </div>
        </div>
       
    </div>
  );
};

export default Login;