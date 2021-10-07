import { useEffect, useRef, useState } from 'react'

import Input from '../../UI/Input'
import classes from './MealItemForm.module.css'

const MealItemForm = props => {
    const amountInputRef = useRef() //DOM To Tag input
    const [amountIsValid, setAmountIsValid] = useState(true)
    const submitHandler = event => {
        event.preventDefault()

        const enteredAmount = amountInputRef.current.value; //typeof: string 👇🏼
        const enteredAmountNumber = +enteredAmount //Convert string to number

        if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
            setAmountIsValid(false)
            return
        } else { setAmountIsValid(true) }

        // add amount item
        props.onAddToCart(enteredAmountNumber)
    }
    useEffect(() => {
        // console.log('%camountInputRef', 'color:green', amountInputRef)
    }, [])
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                ref={amountInputRef}
                label="Amount"
                input={{
                    id: 'amount',
                    type: 'number',
                    min: '1',
                    max: '6',
                    step: '1',
                    defaultValue: '1',
                    name: "amount"
                }} />
            <button>+ Add</button>
            {!amountIsValid ? <p style={{ color: '#df4759' }}>Please enter a valid amount(1-5)</p> : null}

        </form>
    )
}

export default MealItemForm // 💡 MealItem