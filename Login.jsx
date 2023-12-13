// src/components/LoginForm.js
import React, { useState } from "react";

export const Login = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }

  return (
    <div> 
      <h1><center>Login</center></h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <center><input value={email} onChange={(e) => setEmail(e.target.value)} type="email"  id="email" name="email" /></center>
        <label htmlFor="password">Password</label>
        <center><input value={pass} onChange={(e) => setPass(e.target.value)} type="password" id="password" name="password" /></center>
        <center><button type="submit">Log In</button></center>
      </form>
      <div className="link-btn" onClick={()=> props.onFormSwitch('register')}>Don't have an account? Register here.</div>
    </div>
  );
}
