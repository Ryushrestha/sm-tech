import React, { useState } from 'react'
import Main from './Main'
import Search from './Search'
import { BsPerson, BsCart } from 'react-icons/bs'
import { BiMenuAltRight } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import NavCategories from './NavCategories'




const Navbar = () => {


  const [nav, setNav] = useState(false)
  const handleOpen = () => {
    setNav(!nav)
  }

  const cartHandler= (e) =>{
    e.preventDefault()
 
  }

  return (
    <div className='flex flex-col '>

      <div className='hidden md:flex bg-background px-20 '>
        <Main />
      </div>

       <div className='h-16 justify-between items-center  flex  py-3  px-5 sm:px-10 md:px-20'>
        <a href='/'><img src='./logo.png' className='h-11'/></a>
        <Search />
        <div className='hidden  sm:flex flex-row   gap-5'>
          <div className='flex flex-row my-auto items-center gap-2'>
            <BsPerson className='text-primary text-xl' />
            <a href='/login'><button className='bg-transparent border-none hover:underline' >Sign In</button></a>
          </div>
          <div className='flex flex-row my-auto items-center gap-2'>
            <BsCart className='text-primary text-xl' />
            <button className='bg-transparent border-none hover:underline' onClick={(e)=>cartHandler(e)}>Cart</button>
          </div>

        </div>

        <div className='relative sm:hidden my-auto'>
        <button className=' sm:hidden cursor-pointer' onClick={handleOpen}>{!nav ?
            (<BiMenuAltRight className='text-primary text-lg' />) : (<AiOutlineClose className='text-primary text-lg' />)
          }</button>
          <div className={!nav ? 'hidden' : 'absolute right-4 rounded-lg border border-navtext bg-slate-100 px-5 py-3 w-max items-start flex flex-col sm:hidden'}>
            <span className='flex flex-row my-3 items-center gap-2'>
              <BsPerson className='text-primary text-xl' />
             <button className='bg-transparent border-none hover:underline' >Sign In</button>
            </span>
            <hr className='border border-navtext w-full' />
            <span className='flex flex-row my-3  items-center gap-2'>
              <BsCart className='text-primary text-xl' />
              <a href='/cart'><button className='bg-transparent border-none hover:underline' onClick={(e)=>cartHandler(e)}>Cart</button></a>
            </span>
          </div>
        </div>
      </div> 


      <hr className='border border-navtext border-1' />
      <div className='h-fit items-center justify-between flex px-5 sm:px-10 py-3 md:px-20'>
        <NavCategories />
      </div>
    </div>
  )
}

export default Navbar