import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../Reducer/cartReducer'

const CartContext = createContext();

const getLocalCartData = () =>{
  let localCardData =  localStorage.getItem("apnaCart");
  if(localCardData === []){
    return [];
  }
  else{
    return JSON.parse(localCardData);
  }
}

const initialState = {
    cart: getLocalCartData(),
    total_item: "",
    total_price: "",
    shiping_fee: 50000,
}

const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const addToCart = (amount, color, id, product) => {
        dispatch({ type: "ADD_TO_CART", payload: { amount, color, id, product } })
    }

    const removeItem = (id) => {
        dispatch({ type: "REMOVE_ITEM", payload: id })
    }

    const clearCart = (id) => {
        dispatch({ type: "CLEAR_CART"})
    }

    const setIncrease = (id) =>{
        dispatch({type:"SET_INCREASE", payload:id})
    }

    const setDecrease = (id) =>{
        dispatch({type:"SET_DECREASE", payload:id})
    }

    useEffect(()=>{
        dispatch({type:"CART_TOTAL_ITEM"});
        localStorage.setItem("apnaCart", JSON.stringify(state.cart))
    },[state.cart])

    return (<CartContext.Provider value={{ ...state, addToCart, removeItem, clearCart, setIncrease, setDecrease }}>
        {children}
    </CartContext.Provider>
    )
}

const useCartContext = () => {
    return useContext(CartContext);
}

export { CartProvider, useCartContext }

