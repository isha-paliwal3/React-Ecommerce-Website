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

        if(action.type === "SET_INCREASE"){
    
                    let updatedAmount = state.cart.map((curElem) =>{
                        if(curElem.id === action.payload){
                            let newAmount = curElem.amount + 1;  
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
                        cart: updatedAmount,
                    }
    }

        if(action.type === "SET_DECREASE"){
            let updatedAmount = state.cart.map((curElem) =>{
                if(curElem.id === action.payload){
                    let newAmount = curElem.amount - 1;  
                    if(newAmount <= 1) 
                    {
                        newAmount = 1;
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
                cart: updatedAmount,
            }
        }

        if(action.type === "CART_TOTAL_ITEM"){
            let updatedItemVal = state.cart.reduce((initialVal, curElem) => {
                let { amount } = curElem;
          
                initialVal = initialVal + amount;
                return initialVal;
              }, 0);
          

            return{
                ...state,
                total_item: updatedItemVal,
            }
        }

        if(action.type === "CART_TOTAL_PRICE"){
            let updatedTotalPrice = state.cart.reduce((initialVal,curElem)=>{
                let {amount,price} = curElem;
                initialVal = initialVal + (amount*price);
                return initialVal;
            }, 0);

            return{
                ...state,
                total_price: updatedTotalPrice,
            }
        }

        return state;
}

export default cartReducer;