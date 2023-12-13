import React, { useState } from "react";

export const Register = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }

  return (
    <div>
      <header>
      <h1><center>Register</center></h1>
      </header>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full name</label>
        <center><input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name"  /></center>
        <label htmlFor="email">Email</label>
        <center><input value={email} onChange={(e) => setEmail(e.target.value)} type="email"  id="email" name="email" /></center>
        <label htmlFor="password">Password</label>
        <center><input value={pass} onChange={(e) => setPass(e.target.value)} type="password"  id="password" name="password" /></center>
        <center><button type="submit">Register</button></center>
      </form>
      <div className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</div>
    </div>
  );
}
