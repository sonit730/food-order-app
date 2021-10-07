import { useReducer } from "react"

import CartConText from "./cart-context"

const defaultCartState = {
    items: [],  //Mong muốn trả về Array 🌈
    totalAmount: 0
}

const cartReducer = (state, action) => {
    /* Handler Event Add Item */
    if (action.type === 'ADD') {
        // const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        // //Kiểm tra CartItem có tồn tại trong hay chưa ?
        // const existingCartItemIndex = state.items.findIndex(item => {
        //     return item.id === action.item.id
        // })

        // const existingCartItem = state.items[existingCartItemIndex]
        // let updatedItems;

        // if (existingCartItem) {
        //     const updatedItem = {
        //         ...existingCartItem,
        //         amount: existingCartItem.amount + action.item.amount
        //     };
        //     updatedItems = [...state.items]
        //     updatedItems[existingCartItemIndex] = updatedItem;
        // } else {
        //     updatedItems = state.items.concat(action.item); //thêm item(Object) vào Array 🌈
        // }

        // return {
        //     items: updatedItems,
        //     totalAmount: updatedTotalAmount
        // }

        /**
         * LOGIC:
         * - Có 2 biến: ⚡
         *   + updatedItems: mảng([]) các object(item meal)
         *   + updatedTotalAmount: tổng tiền
         * - Works: 💯
         *   + Trước khi thêm mới thì phải kiểm tra xem trong updatedItems
         *     có item meal tồn  tại trước đó chưa dựa vào hasExistingCartItemIndex
         *       * TH1: chỉ cập nhật lại amount trong updatedItems
         *       + TH2: thêm mới
         */
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount; //⚡
        let updatedItems; //⚡

        const hasExistingCartItemIndex = state.items.findIndex((item) => {
            return action.item.id === item.id;
        })

        //TH1:
        if (hasExistingCartItemIndex !== -1) {

            //Update amount mà state đã lưu trước đó dụa vào index
            state.items[hasExistingCartItemIndex].amount = state.items[hasExistingCartItemIndex].amount + action.item.amount;

            updatedItems = [...state.items] // 👍🏼
        }
        // TH2:
        else {
            updatedItems = state.items.concat(action.item); //thêm item meal mới(Object) vào Array 👍🏼
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    /* End Handler Event Add Item */

    /* Handler Event Remove Item */
    if (action.type === 'REMOVE') {
        /**
         * LOGIC REMOVE:
         * - Giảm amount xuống
         */
        let updatedItems, updatedTotalAmount;

        const cartItemIndex = state.items.findIndex(item => {
            return action.id === item.id
        })

        const _cloneState = [...state.items]
        const amountItem = _cloneState[cartItemIndex].amount //Object;

        console.log('%cState: ', 'color:red', JSON.parse(JSON.stringify(state)))

        if (amountItem === 1) {
            _cloneState.splice(cartItemIndex, 1)
        } else {
            _cloneState[cartItemIndex].amount = _cloneState[cartItemIndex].amount - 1; //giảm 1 item
        }

        // console.log('%ccartItems:', 'colort:green', _cloneState)

        updatedItems = _cloneState
        updatedTotalAmount = state.totalAmount - state.items[cartItemIndex].price

        console.log('%cupdatedItems:', 'color:blue', updatedItems)
        console.log('%cupdatedTotalAmount:', 'color:blue', updatedTotalAmount)


        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    /* End Handler Event Remove Item */
    return defaultCartState;
}

const CartProvider = props => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)
    // console.log('cartState: ', cartState)

    /*==== Data for CartContext.Provider ====  */
    const addItemToCartHandler = (item) => { //item is Object
        dispatchCartAction({ type: 'ADD', item: item })
    }
    const removeItemFromHandler = id => {
        dispatchCartAction({ type: 'REMOVE', id: id })
    }

    const cartContext = {
        items: cartState.items, //[item, item] 🌈
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromHandler
    }
    /*==== End Data for CartContext.Provider ====  */

    return <CartConText.Provider value={cartContext} >
        {props.children}
    </CartConText.Provider>
}

export default CartProvider //💡App, HeaderCartButton