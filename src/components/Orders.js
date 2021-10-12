import {  orderBy, onSnapshot, query, collection } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useStateValue } from '../data layout/StateProvider'
import '../styles/Orders.css'
import { db } from './firebase'
import Order from './Order'

const Orders = () => {
    const  [{basket, user}, dispatch] = useStateValue()
    const [orders, setOrders] = useState([])
    const [orderId, setOrderId] = useState([])
    useEffect(() => {
        if(user){
            const userDocs = collection(db, `users/${user?.uid}/orders` ) 
            const q = query(userDocs, orderBy('created')) 
            const unsubscribe = () => onSnapshot(q , snapshot =>{
                console.log(snapshot);
                snapshot.forEach((doc) => {
                    setOrders({
                        data: doc.data()
                    })
                    setOrderId({
                        id: doc.id,
                    })
                })
            }) 
            unsubscribe()
        
        } else  {
            setOrders([])
        }
    }, [user]) 
    const ordersArr = Object.entries(orders).map(([key, value]) => ({label: key, data: value}))
    
    return (
        <div className='orders' >
            <h1>Your Order</h1>
            <div className='orders_order' >
                {ordersArr.map(order => (
                    <Order order={order} orderId={orderId} />
                ))}
            </div>
        </div>
    )
}

export default Orders
