import CartContext from "../../store/cart-context"
import { useContext } from "react"
const Footer = (props) => {
    const cartCtx = useContext(CartContext)
    console.log(cartCtx)
    console.log(cartCtx.totalAmount)
    // console.log('totalAmount: ', totalAmount)
    return (
        <h1>Footer</h1>
    )
}

export default Footer