import { useContext, useEffect, useState } from 'react'

import CartIcon from "../Cart/CartIcon"
import CartContext from '../../store/cart-context'
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = props => {
    const { onShowCart } = props

    const [btnIsHighLighted, setBtnIsHighLighted] = useState(false)
    const cartCtx = useContext(CartContext)
    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount
    }, 0)

    const btnClasses = ` ${btnIsHighLighted ? classes.bump : ''}`
    const { items } = cartCtx
    useEffect(() => {

        if (items.length === 0) {
            return
        }
        setBtnIsHighLighted(true)

        const timer = setTimeout(() => {
            setBtnIsHighLighted(false)
        }, 300)

        return () => {
            clearTimeout(timer)
        }
    }, [items])
    return (
        <button className={classes.button} onClick={onShowCart} >
            <span className={classes.icon} ><CartIcon /></span>
            <span>Your Cart</span>
            <span className={`${classes.badge} ${btnClasses}`} >{numberOfCartItems}</span>
            {/* <span className={classes.badge} >{numberOfCartItems}</span> */}
        </button >
    )
}

export default HeaderCartButton //💡 Header