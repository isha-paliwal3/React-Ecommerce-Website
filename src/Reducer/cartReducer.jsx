const cartReducer = (state, action) => {
        if (action.type === "ADD_TO_CART"){
            let {amount, color, id, product} = action.payload;    
            
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

        if (action.type === "REMOVE_ITEM"){
            let updatedCart;

            updatedCart = state.cart.filter((curElem)=>curElem.id !== action.payload);
            return{
                ...state,
                cart: updatedCart
            }
        }

        return state;
}

export default cartReducer;