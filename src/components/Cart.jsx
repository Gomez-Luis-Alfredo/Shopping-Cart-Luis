import { useId } from 'react'
import './cart.css'
import {CartIcon, ClearCartIcon} from './Icons'
import { useCart } from '../hoocks/useCart'


function CartItem ({thumbnail,title, price, quantity, addToCart}) {

    return (
        <li>
             
        <img src={thumbnail} alt={title}/>
        <div>
            <strong>{title}</strong> -${price}
        </div>
        <footer>
            <small>
                Qty: {quantity}
            </small>
            <button onClick={addToCart}>+</button>
        </footer>
    </li>
    )
}

export function Cart  () {
    const cartCheckeboxId = useId()
    const {cart, clearCart,addToCart } = useCart()

  return (
    <>
    <label htmlFor={cartCheckeboxId} className='cart-button'><CartIcon/></label>
    <input type="checkbox" hidden id={cartCheckeboxId}/>

    <aside className='cart'>
        <ul>
            {
                cart.map(product => (
                    <CartItem 
                    key={product.id} 
                    addToCart = {() => addToCart(product)}
                    {... product }
                    />
                ))
            }
          
        </ul>
        <button onClick={clearCart}><ClearCartIcon/></button>
    </aside>
    </>
  )
}
