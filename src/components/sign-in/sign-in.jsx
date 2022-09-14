import React from 'react';
import "./sign-in.css";
import { content2 } from '../../static';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from 'react-router-dom';

const schema = yup.object().shape({

  project: yup.string().required().min(6),
  email: yup.string()
    .email()
    .required(),
  password: yup.string()
    .required()
    .min(6),
    
});

const SignIn = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = 
  useForm(
    {
        resolver: yupResolver(schema)
    }
  );

  const onSubmit = (data) => console.log(data)

  return (
    <div className="sign-in">
        <h1>Have an account already? </h1>
        <h3>Sign in here!</h3>

        {/* <form>
            <label htmlFor="email">Email</label>
            <input name="email" type="email" />
            <label htmlFor="password">password</label>
            <input name="password" type="email" /> */}

            <form onSubmit={handleSubmit(onSubmit)}>
            {content2.inputs.map((input,key) => {
                return (
                    <div key={key}>
                        <label htmlFor={input.name}>{input.label}</label>
                        <br/>
                        <input type={input.type} name={input.name} {...register(input.name)} />
                        <br />
                        <span className='message'>{errors[input.name]?.message}</span>
                    </div>
                )
            })}

            {/* <label htmlFor="text">Project Name</label>
            <input name="text" type="text" /> */}

            <button>SIGN IN</button>
        </form>
        <p>Don't have an account?<Link to="/signup"></Link> Sign up</p>
        <p><Link to="/">Home</Link></p>
    </div>
  )
}

export default SignIn