import React from 'react';
import './Login.css';
import logo from '../../assets/logo.png';

const Login = () => {
  return (
    <div className='login'>
      <img src={logo} alt='' className='login-logo' />
      <div className='login-form'>
        <h1>Sign Up</h1>
        <form>
          <input type='text' name='' id='' placeholder='Your name' />
          <input type='email' name='' id='' placeholder='email' />
          <input type='password' name='' id='' placeholder='password' />
          <button>Sign Up</button>
          <div className='form-help'>
            <div className='remember'>
              <input type='checkbox' name='' id='' />
              <label htmlFor=''>Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
