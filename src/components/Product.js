import React from 'react'
import {Rating} from '@material-ui/lab'
import { useStateValue } from '../data layout/StateProvider'
import '../styles/Product.css'

const Product = ({
    title, price, image, rating, precision, id
}) => {
    const [{ basket }, dispatch] = useStateValue()
    const addToBasket = () => {
        // dispatch the item into the data layout
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        })
    }
    return (
        <div className="product" >
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    <Rating name="size-medium" defaultValue={rating} precision={precision} readOnly />
                </div>
            </div>
            <img src={image} alt="" />
            <button onClick={addToBasket} >Add to basket</button>
        </div>
    )
}

export default Product
