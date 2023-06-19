'use client'

import React from 'react';
import Link from 'next/link';
import { LuBird } from 'react-icons/lu';

import { FcGoogle } from 'react-icons/fc';
import { useCallback, useState } from 'react';

import {
  FieldValues,
  SubmitHandler,
  useForm,

} from 'react-hook-form';


import { toast } from 'react-hot-toast';

import axios from 'axios'





const SignUp = () => {


  const {
    register,
    handleSubmit,
    formState: { 
        errors 
    }
} = useForm<FieldValues>({
    defaultValues: {
        name: '',
        email: '',
        password: '',
    } 
});

const onSubmit: SubmitHandler<FieldValues> = (data) => {

    axios.post('/api/register', data)
    .then(() => {
        toast.success('Account created successfully');
    })
    .catch((error) => {
        toast.error('Something went wrong');
    })
}




    return (
        <div className="flex flex-col items-center h-screen  justify-center  ">
        <Link href="/">

        <LuBird 
        className="text-4xl text-blue-500"
        
        />
      </Link>

      <div className="flex flex-col items-center gap-5  w-3/4  md:w-1/4 pt-10 ">
        <h1 className="text-3xl text-gray-700 font-semibold">Register</h1>
      </div>

      <div className="flex flex-col gap-5 p-5  w-3/4  md:w-1/4 ">
        <label 
        htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          required
          className="border-[1px] border-gray-300 rounded-xl p-5 w-full"
        />
      </div>
      <div className="flex flex-col  gap-5 p-5  w-3/4  md:w-1/4">
        <label htmlFor="password">Password</label>
        <input
          type="text"
          name="password"
          id="password"
          required
          className="border-[1px] border-gray-300 rounded-xl p-5"
        />
      </div>
      <div className="justify-between flex flex-row px-5  w-3/4  md:w-1/4">
      
      <div className="flex flex-row gap-3 ">
      <input type="checkbox" name="remember" id="remember" />
      <label htmlFor="remember">Remember me</label>
      </div>

        <div>
            <a href="Help" className="text-blue-500">
                Need Help ?
            </a>
        </div>
        </div>

        <div className="flex flex-col gap-5 p-5  w-3/4 md:w-1/4 ">
          <button 

          onClick={handleSubmit(onSubmit)}
          
          className="bg-blue-500 rounded-xl p-5  text-white">
            Create Account
          </button>
        </div>

        <div className="flex flex-col gap-5 p-5  w-3/4 ">
          <Link 
          className="
          text-center
          cursor-pointer
          
          "

          href="/Login">
            Already have an account
            
             ? Log in
          </Link>
       
          </div>
    </div>
  );
};


 
export default SignUp;