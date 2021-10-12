import React from 'react'
import { useStateValue } from '../data layout/StateProvider'
import '../styles/Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'

const Checkout = () => {
    const [{basket, user}, dispatch] = useStateValue()
    return (
        <div className="checkout" >
            <div className="checkout__left">
                <img alt='' className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" />
                <div>
                    <h3 className="checkout__title">Hello {user?.email}</h3>
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal /> 
            </div>
        </div>
    )
}

export default Checkout
