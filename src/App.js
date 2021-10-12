import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Checkout from './components/Checkout';
import Login from './components/Login';
import { auth } from './components/firebase';
import { useStateValue } from './data layout/StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Payment from './components/Payment';
import Orders from './components/Orders';

const promise = loadStripe('pk_test_51JOrCRH2MDO0OCdZ4xZMo8diiXoWockkthBKvr5tl1eCEynJDipEFTK5pY3t07wGUqgP7o50kjV8TkZ8lDFNtDyg00tRiVBz3e')

function App() {
  const [{}, dispatch] = useStateValue()
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('the user is >>>', authUser)
      if (authUser) {
        dispatch({
          type:'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type:'SET_USER',
          user: null
        })
      }
    })
  }, [])
  return (
    <Router>
      <div className="app">
          <Switch>
            <Route exact path="/" >
              <Header />
              <Home />
            </Route>
            <Route exact path="/orders" >
              <Header />
              <Orders />
            </Route>
            <Route exact path="/checkout" >
              <Header />
              <Checkout />
            </Route>
            <Route exact path="/login" >
              <Login />
            </Route>
            <Route exact path="/payment" >
              <Header />
              <Elements stripe={promise} >
                <Payment />
              </Elements>
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
