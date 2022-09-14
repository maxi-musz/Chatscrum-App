import React from 'react';
import "./sign-up.css";
import {content} from '../../static/index.js';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from 'react-router-dom';



const schema = yup.object().shape({

    fullname: yup.string().required().min(6),
    email: yup.string()
      .email()
      .required(),
    password: yup.string()
      .required()
      .min(6),
      
  });

const SignUp = () => {

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
        <div className='sign-up'>
        <h1>Dont have an account?</h1>
        <h3>Sign Up here!</h3>
        
        <form onSubmit={handleSubmit(onSubmit)}>
            {content.inputs.map((input,key) => {
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

            <label htmlFor="options">User type</label>
            <select id="options">
                <option value="Developer">Developer</option>
                <option value=" Owner"></option>
            </select>

            <button>Sign Up</button>
        </form>
        <p>Have an account? <Link to="signin"></Link>Sign In</p>
        <p><Link to="/">Home</Link></p>
    </div>
    );
}

export default SignUp;