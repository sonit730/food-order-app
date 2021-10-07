/**
 *      Header.js
 */

import { Fragment, useContext, useState } from "react"
import mealsImage from '../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton"
const Header = props => {
    const { onShowCart } = props
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onShowCart={onShowCart} />
            </header>

            <div className={classes['main-image']}>
                <img src={mealsImage} />
            </div>
        </Fragment>)
}

export default Header // 💡 App