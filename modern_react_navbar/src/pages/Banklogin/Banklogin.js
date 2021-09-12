import React, { useState } from "react";
import './login.css'
const Banklogin = () => {
  const [cred,setCred]= useState({name:"",password:""})
  const handleChange= (e)=>{
    setCred({
      ...cred,[e.target.name]:e.target.value
    })
  }
  const handleClick=() =>{
    if(cred.name=="pranith" && cred.password=="pranith" ){
      window.location.href="/dashboard"
    }
    
  }
  return (
    <div class="login-wrapper">
    <form action="" class="form">
      <h2>Bank Login</h2>
      <div class="input-group">
        <input type="text" value={cred.name} name="name" onChange={handleChange} id="name" required/>
        <label for="loginUser">User Name</label>
      </div>
      <div class="input-group">
        <input type="password" value={cred.password} onChange={handleChange}  name="password" id="password" required/>
        <label for="loginPassword" >Password</label>
      </div>
      <input type="button" value="Login" class="submit-btn" onClick={handleClick}/>
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
export default Banklogin;