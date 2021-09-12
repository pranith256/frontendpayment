import React, { useState } from "react";
import './login.css'
const Login = () => {
  const [cred,setCred]= useState({name:"",password:""})
  const handleChange= (e)=>{
    setCred({
      ...cred,[e.target.name]:e.target.value
    })
  }
  return (
    <div class="login-wrapper">
    <form action="" class="form">
      <h2>Customer Login</h2>
      <div class="input-group">
        <input type="text" value={cred.name} name="name" id="name" required/>
        <label for="loginUser" color="black">User Name</label>
      </div>
      <div class="input-group">
        <input type="password" value={cred.password} name="password" id="password" required/>
        <label color="black" for="loginPassword">Password</label>
      </div>
      <input type="submit"  value="Login" class="submit-btn"/>
      <a href="#forgot-pw" class="forgot-pw">Forgot Password?</a>
    </form>

    <div id="forgot-pw">
      <form action="" class="form">
        <a href="#" class="close">&times;</a>
        <h2>Reset Password</h2>
        <div class="input-group">
          <input type="email" name="email" id="email" required/>
          <label for="email">Email</label>
        </div>
        <input type="submit" value="Submit" class="submit-btn"/>
      </form>
    </div>
  </div>
  );
};
export default Login;