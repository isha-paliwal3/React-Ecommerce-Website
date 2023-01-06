import React from 'react'
import FormatPricing from '../Helpers/FormatPricing'
import CardAmountToggle from './CardAmountToggle'
import { FaTrash } from "react-icons/fa";
import { useCartContext } from '../Context/CartContext';

const CartItem = ({id, name, image, color, price, amount}) => {

    const {removeItem} = useCartContext();

    return (
       <div className="cart-heading grid grid-five-column">
            <div className="cart-image--name">
                <div>
                    <figure>
                        <img src={image} alt={id} />
                    </figure>
                </div>
                <div>
                    <p>{name}</p>
                    <div className="color-div">
                    <p>Color:</p>    
                    <div className="color-style" style={{background:color, color:color}}></div>
                    </div>
                </div>
            </div>
            <div className="cart-hide">
                <p><FormatPricing price={price}/></p>
            </div>
            <div className="amount-toggle">
                <CardAmountToggle amount={amount} />
                {/* setDecrease={setDecrease} setIncrease={setIncrease}/> */}
            </div>
            <div className="cart-hide">
              <p>
                 <FormatPricing price={price*amount}/>
              </p> 
            </div>
            <div>
                <FaTrash className='remove_icon' onClick={()=> removeItem(id)}/>
            </div>
       </div>
  )
}

export default CartItem
    