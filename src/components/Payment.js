import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useStateValue } from '../data layout/StateProvider'
import '../styles/Payment.css'
import CheckoutProduct from './CheckoutProduct'
import { CardElement ,useElements, useStripe } from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from '../data layout/reducer'
import {db} from './firebase'
import { collection, addDoc, addCollection , doc, setDoc } from "firebase/firestore";
import axios from '../assets/axios'

const Payment = () => {
    const [{basket, user}, dispatch] = useStateValue()

    const [error, setError] = useState(null)
    const [disabled, setDisabled] = useState(true)
    const [succeeded, setSucceeded] = useState(false)
    const [processing, setProcessing] = useState(false)
    const [clientSecret, setClientSecret] = useState(true)

    useEffect(() => {
        //generate the special secret stripe secret key that allows us to charge the customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            })
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret()
    }, [basket])
    
    const stripe = useStripe()
    const elements = useElements()
    const history = useHistory()
    console.log('the secret key is >>>', clientSecret);
    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true)
        await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {

            
            const userDocs = doc(db, `users/${user?.uid}/orders`, paymentIntent.id )
            console.log(userDocs);
            setDoc(userDocs,{
                basket: basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created,
            },  {merge : true})

            setSucceeded(true)
            setError(null)
            setProcessing(false)
            dispatch({
                type: 'EMPTY_BASKET',
            })
            history.replace('/orders')
        })
    }
    const handleChange = (event) => {
        setDisabled(event.empty)
        setError(event.error ? event.error.message : '')
    }
    return (
        <div className='payment' >
            <div className="payment__container">
                <h1>
                    Checkout <Link to='/checkout' >({basket?.length} items)</Link>
                </h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items & delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                key={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        <form onSubmit={handleSubmit} >
                            <CardElement onChange={handleChange} />
                            <div className="payment__priceContainer">
                                <CurrencyFormat 
                                    renderText={(value) =>(
                                            <h3 className="order__total-title">Order total: {value}</h3> 
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'$'}
                                />
                                <button disabled={processing || 
                                                    disabled || 
                                                    succeeded} >
                                    <span>
                                        {processing ? <p>Processing</p>: 'Buy Now'}
                                    </span>
                                </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
