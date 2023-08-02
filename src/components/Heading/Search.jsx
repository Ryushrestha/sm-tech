import { Divider, Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { BsFilter, BsSearch } from 'react-icons/bs'
import { GrFormView } from 'react-icons/gr'
import { Product } from '../../context/ProductContextProvider'



const Search = () => {
  const [product, setProduct] = useState([])
  const [originalProduct, setOriginalProduct] = useState([])
  const [search, setSearch] = useState(false)


  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products`)
      .then((response) => {
        setOriginalProduct(response.data)
      })
  }, [])


  const searchProduct = (value) => {

    const filteredProducts = originalProduct.filter((prod) => {
      return prod.title.toLowerCase().includes(value.toLowerCase()) || prod.category.toLowerCase().includes(value.toLowerCase())
    })
    
    setProduct(filteredProducts)
  }



  const { handleProduct } = useContext(Product)

  const viewHandler = (e, products) => {
    e.preventDefault()
    handleProduct(products)
    navigate('/product')
  }

  const handleClick = () => {
    setSearch(!search)
  }
  return (
    <div className='w-auto relative md:w-1/2'>
      <InputGroup className='border-none '>
        <InputLeftElement onClick={handleClick} ><button ><BsSearch className='text-primary text-lg' /></button></InputLeftElement>
        <Input placeholder='Search essentials products' onChange={(e) => searchProduct(e.target.value)} />
        <InputRightElement><BsFilter className='text-primary text-lg' /></InputRightElement>
      </InputGroup>

      <div className='rounded-sm bg-white absolute w-full z-50 shadow-white '>

        {

          product != null && product.map((products) => {
            return (
              <div className='flex flex-col px-5' >
                
                <div className=' flex flex-row py-3 items-center justify-between' key={products.id}>
                  <div className='flex flex-row items-center gap-4'>
                    <div className='h-14 w-14 p-1 rounded shadow-md border border-zinc-300'>
                      <img className='h-full w-full object-fill' src={products.image} />
                    </div>
                    <span className='flex flex-col '>
                      <p className='font-semibold line-clamp-1'>{products.title}</p>
                      <p className='uppercase text-xs text-navtext'>{products.category}</p>
                    </span>
                  </div>
                  <span className='cursor-pointer' onClick={(e) => viewHandler(e, products)} >
                    <GrFormView className='bg-primary hover:bg-white text-inactiveColor text-3xl rounded-full' />
                  </span>
                </div>
                
                <Divider />
              </div>
                
            )
          })
        }
      </div>
    </div>
  )
}

export default Search