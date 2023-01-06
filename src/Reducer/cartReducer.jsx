const cartReducer = (state, action) => {
        if (action.type === "ADD_TO_CART"){
            let {amount, color, id, product} = action.payload;    
            
            let existingProducts = state.cart.find((curItem)=> curItem.id === id+color);

            if (existingProducts){

                let updatedProduct = state.cart.map((curElem)=>{
                    if(curElem.id === id + color){
                        let newAmount = curElem.amount + amount;  
                        if(newAmount >= curElem.max) 
                        {
                            newAmount = curElem.max;
                        } 
                        return{
                            ...curElem,
                            amount: newAmount
                        }
                    }
                    else{
                        return curElem;
                    }
                })
                return{
                    ...state,
                    cart: updatedProduct,
                }
            }else{   
                let cartProducts;
                
                cartProducts = {
                    id: id+color,
                    name: product.name,
                color,
                amount,
                price: product.price,
                image: product.image[0].url,
                max: product.stock,
            }
            return{
                ...state,
                cart:[...state.cart, cartProducts]
            }
        }
    }

        if (action.type === "REMOVE_ITEM"){
            let updatedCart;

            updatedCart = state.cart.filter((curElem)=>curElem.id !== action.payload);
            return{
                ...state,
                cart: updatedCart
            }
        }

        if(action.type === "CLEAR_CART"){
            return{
                ...state,
                cart: [],
            }
        }

        return state;
}

export default cartReducer;