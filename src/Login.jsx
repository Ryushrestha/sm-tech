import React from 'react'
import Navbar from './components/Heading/Navbar'
import { Divider } from '@chakra-ui/react'

const Login = () => {
  return (
  <>
  <Navbar/>
  <div className='flex flex-col border border-zinc-300 shadow-md mx-auto p-4 gap-5 '>
    <span className='flex flex-col gap-3 items-center'>
      <img className='h-10'  src='./logo.png'/>
      <h1 className='font-bold text-xl'>Login to your account</h1>
      </span>
      <div className='flex flex-col gap-3'>
      <span className='flex flex-row gap-2 justify-between'>
        <p className='text-base'>Email :</p>
        <input type='email' placeholder='Enter your email' className='border border-zinc-400 rounded-md px-2'/>
      </span>
      <span className='flex flex-row gap-2 justify-between'>
        <p className='text-base'>Password :</p>
        <input type='Password' placeholder='Enter your password' className='border border-zinc-400 rounded-md px-2'/>
      </span>
      </div>
      <Divider/>
      <div className='flex flex-row justify-between'>
        <p className='text-base text-navtext'>Don't have an account?</p>
        <p className='text-base text-navtext hover:underline'>Signup</p>
      </div>
  </div>
  </>
  )
}

export default Login