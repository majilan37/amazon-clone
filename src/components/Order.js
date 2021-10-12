import moment from 'moment'
import React from 'react'
import CurrencyFormat from 'react-currency-format'
import '../styles/Order.css'
import CheckoutProduct from './CheckoutProduct'

const Order = ({order, orderId}) => {
    console.log(order)
    return (
        <div className='order' >
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format('MMM Do YYY, h:mma')}</p>
            <p className="order__id" >
                <small>{orderId.id}</small>
            </p>
            {order.data.basket?.map(item =>(
                <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    hideButton
                 />
            ))}
            <CurrencyFormat 
                renderText={(value) =>(
                  <h3 className="order__total" > Order Total: {value}</h3>
                )}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
            />
        </div>
    )
}

export default Order

