import React from 'react'
import CurrencyFormat from 'react-currency-format'
import '../styles/Subtotal.css'
import { useStateValue } from '../data layout/StateProvider'
import { getBasketTotal } from '../data layout/reducer'
import { useHistory } from 'react-router-dom'

const Subtotal = () => {
    const history = useHistory()
    const [{basket}, dispatch] = useStateValue()
    console.log(basket)
    return (
        <div className='subtotal' >
            <CurrencyFormat 
                renderText={(value) =>(
                    <>
                        <p>
                            Subtotal ({basket?.length} items) :
                            <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift.
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
            />
            <button onClick={() => history.push('/payment')} >Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
