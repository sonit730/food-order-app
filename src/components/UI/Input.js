import React, { useEffect, useRef } from 'react'

import classes from './Input.module.css'

const Input = React.forwardRef((props, ref) => {
    // const inputRef = useRef()
    // useEffect(() => {
    //     console.log('inputRef: ', inputRef)
    // }, [])
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id} >{props.label}</label>
            <input ref={ref} {...props.input} />
        </div>
    )
})

export default Input //called by MealItemForm 💡