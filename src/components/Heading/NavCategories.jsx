import React, { useEffect, useState } from 'react'
import { BiChevronDown } from 'react-icons/bi'
const NavCategories = () => {
 
    const [pathname, setPathname] = useState('')


    useEffect(() => {
        setPathname(window.location.pathname);
    }, []);



    const activeLink = 'border-none px-2 rounded-xl uppercase text-white text-xs sm:text-sm bg-primary flex flex-row items-center truncate sm:text-clip gap-2'
    const inactiveLink = 'border-none px-2 rounded-xl uppercase text-xs sm:text-sm bg-inactiveColor flex flex-row  items-center gap-2 '
    return (

        <div className='flex flex-row flex-wrap gap-5 mt-1 '>
           
                        <div  className='relative cursor-pointer'>
                            <a href='/electronics'><button className={`${pathname === '/electronics' ? activeLink : inactiveLink}`}>Electronics<BiChevronDown className={`${pathname === '/electronics' ? 'text-white text-lg' : 'text-primary text-lg'}`} /></button>
                            </a>
                        </div>
                        <div  className='relative cursor-pointer'>
                            <a href='/jewelery' ><button className={`${pathname === '/jewelery' ? activeLink : inactiveLink}`}>Jewelery<BiChevronDown className={`${pathname === '/jewelery' ? 'text-white text-lg' : 'text-primary text-lg'}`} /></button>
                            </a>
                        </div>
              
        </div>
    )
}

export default NavCategories