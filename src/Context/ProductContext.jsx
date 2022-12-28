import { createContext, useContext, useEffect, useReducer } from "react";
import axios from 'axios'
import reducer from '../Reducer/productReducer'

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const InitialState = {
    isLoading: false,
    isError: false,
    products: [],
    featuredProducts: [],
}

const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, InitialState);

    const getProducts = async (url) => {
        dispatch({type:"SET_LOADING"})
        try {
            const res = await axios.get(url);
            const products = res.data;
            dispatch({ type: "MY_API_DATA", payload: products });
        } catch (error) {
            dispatch({type:"API_ERROR"});
        }
    }

    useEffect(() => {
        getProducts(API);
    }, []);

    return <AppContext.Provider value={{ ...state }}> {children} </AppContext.Provider>
}

// custom Hooks

const useProductContext = () => {
    return useContext(AppContext)
}

export { AppProvider, AppContext, useProductContext };