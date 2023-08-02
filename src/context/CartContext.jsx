import { createContext, useState } from "react";


export const CartProduct = createContext(null);



function CartState({children}){
    const [product,setProduct] = useState([])
    function handleCartProduct(getCurrentItem){    
        setProduct(getCurrentItem)
        
    }
    return (
    <CartProduct.Provider value={{product,handleCartProduct}}>
            {children}
    </CartProduct.Provider>
    )
}

export default CartState