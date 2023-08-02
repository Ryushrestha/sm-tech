import React from 'react'
import {CiLocationOn, CiDeliveryTruck, CiDiscount1} from 'react-icons/ci'


const Main = () => {
  return (
    <div className='items-center text-navtext text-sm w-full justify-between h-8 flex'>
        <div>
            <h1 className='flex flex-row gap-2'>Welcome to <p className='font-semibold'> Sm-Tech MegaMart!</p></h1>
        </div>
        <div className='justify-evenly flex flex-row gap-5'>
            <span className='flex flex-row my-auto'>
                    <CiLocationOn className='text-primary text-xl'/>
                    <span className='flex flex-row gap-1'>
                        <p>Deliver to</p>
                        <p className='font-bold'>Tinkune</p>
                    </span>
            </span>
            <div className='h-10 border-1 border-navtext'></div>
            <span className='flex flex-row my-auto'>
                    <CiDeliveryTruck className='text-primary text-xl'/>           
                        <p>Track Your Order</p>
            </span>

            <span className='flex flex-row my-auto gap-1'>
                    <CiDiscount1 className='text-primary text-xl'/>
                    <p>Internship</p>           
                        <p>Offer</p>
            </span>
        </div>
    </div>
  )
}

export default Main