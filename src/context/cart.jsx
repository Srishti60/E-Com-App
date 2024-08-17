import { createContext, useContext, useState } from "react";

const CartContext = createContext(null);

export const useCart = ()=>{
    const cart = useContext(CartContext);
    return cart;
}
export const CartProvider =(props)=>{
    const [items,setItems] = useState([]);
    console.log("CartContext Items:", items);
    const [searchValue,setSearchValue] = useState('')
    console.log('SearchValue',searchValue);
    return <CartContext.Provider value={{items,setItems,searchValue,setSearchValue}}>{props.children}</CartContext.Provider>
}