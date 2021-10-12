import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import '../styles/Header.css'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { Link } from 'react-router-dom'
import { useStateValue } from '../data layout/StateProvider'
import { auth } from './firebase'

const Header = () => {
    const [{ basket, user }, dispatch] = useStateValue()
    const handleAuth = async () => {
        if(user) {
            await auth.signOut()
        }
    }
    return (
        <div className='header' >
            <Link to='/' >
                <img className='header__logo' src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
            </Link>
            <div className="header__search">
                <input className='header__searchInput' type="text" />
                <SearchIcon className='header__searchIcon' />
            </div>
            <div className="header__nav">
                <Link to={!user && '/login'} >
                    <div onClick={handleAuth} className="header__option">
                        <span className="header__optionLineOne">Hello { user ? `${user?.email}` : 'Guest'}</span>
                        <span className="header__optionLineTwo">{user ? 'Sign out' : 'Sign in'}</span>
                    </div>
                </Link>
                <Link to='/orders' >
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
                <Link to='/checkout' >
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTow header__basketCount">
                            {basket?.length}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
