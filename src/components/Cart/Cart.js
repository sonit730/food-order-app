import { useContext } from 'react';

import Modal from '../UI/Modal';
import classes from './Cart.module.css'
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

const Cart = props => {
    const { onHideCart } = props

    const cartCtx = useContext(CartContext)
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}` //làm tròn 2 chữ số thập phân
    const hasItems = cartCtx.items.length > 0

    //Remove Item ⚡
    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id)
    }


    //Add Item ⚡
    const cartItemAddHandler = item => {
        cartCtx.addItem({ ...item, amount: 1 })
    }
    const cartItems = <ul className={classes['cart-items']}>
        {cartCtx.items.map(item => (
            <CartItem
                key={item.id}
                name={item.name}
                amount={item.amount}
                price={item.price}
                onAdd={cartItemAddHandler.bind(null, item)}
                onRemove={cartItemRemoveHandler.bind(null, item.id)} />
        ))}
    </ul>
    return (
        <Modal onHideCart={onHideCart} >
            {cartItems}
            <div className={classes.total} >
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>

            <div className={classes.actions} >
                <button onClick={onHideCart} className={classes['button--alt']}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart; // 💡 App