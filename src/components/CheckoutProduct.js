import React from 'react'
import {Rating} from '@material-ui/lab'
import '../styles/CheckoutProduct.css'
import { useStateValue } from '../data layout/StateProvider'


const CheckoutProduct = ({title, price, image, rating, precision, id, hideButton}) => {
    const [{ basket }, dispatch] = useStateValue()
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }
    return (
        <div className='checkoutProduct' >
            <img className='checkoutProduct__image' src={image} alt="" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    <Rating name="size-medium" defaultValue={rating} precision={precision} readOnly />
                </div>
                {!hideButton && <button onClick={removeFromBasket} >remove from basket</button>}
            </div>
        </div>
    )
}

export default CheckoutProduct
