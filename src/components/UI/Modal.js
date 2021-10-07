import { Fragment, useRef } from 'react'
import ReactDOM from 'react-dom'

import classes from './Modal.module.css'

/* 🔔 Overlays  */
const Backdrop = props => {
    const { onHideCart } = props
    return <div className={classes.backdrop} onClick={onHideCart} />
}


/* 🔔 Modal Content  */
const ModalOverlay = props => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>
                {props.children}
            </div>
        </div>
    )
}


const portalElement = document.getElementById('overlays')

const Modal = props => {
    const { onHideCart } = props
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onHideCart={onHideCart} />, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </Fragment>
    )
};

export default Modal // 💡 Cart