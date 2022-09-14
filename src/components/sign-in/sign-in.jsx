import React from 'react';
import "./sign-in.css";
import content from '../../static/index';

const SignIn = () => {
  return (
    <div className="sign-in">
        <h1>Have an account already? </h1>
        <h3>Sign in here!</h3>

        <form>
            <label htmlFor="email">Email</label>
            <input name="email" type="email" />
            <label htmlFor="password">password</label>
            <input name="password" type="password" />

            <label htmlFor="text">Project Name</label>
            <input name="text" type="text" />

            <button>SIGN IN</button>
        </form>
        <p>Don't have an account? Sign up</p>
    </div>
  )
}

export default SignIn