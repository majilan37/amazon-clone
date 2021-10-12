import React from 'react'
import '../styles/Home.css'
import Product from './Product'

const Home = () => {
    return (
        <div className='home' >
            <div className="home__container">
                <img className='home__image' src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_TallHero_Gamers_en_US_2x._CB667161802_.jpg" alt="" />
                <div className="home__row">
                    <Product 
                        id='62572753634'
                        title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses" 
                        price={29.99} 
                        image='https://images-na.ssl-images-amazon.com/images/I/81vvgZqCskL.jpg' 
                        rating={5}
                        reducer='hello reducer'
                    />
                    <Product 
                        id='5638635746389'
                        title='PS5 Playstation 5 (US Plug) Blu-ray Disc Edition Console 4K-TV Gaming, 8K Output, Ultra-High Speed 825GB SSD, WiFi 6, Bluetooth 5.1, Etekdirect customer care'
                        price={499.50}
                        image='https://m.media-amazon.com/images/I/31h1Ts8fBeL._SX342_.jpg'
                        rating={4.5}
                        precision={0.5}
                    />
                </div>
                <div className="home__row">
                    <Product
                         id='5424617656'
                         title="Alarco Gaming PC Desktop Computer Intel i5 3.10GHz,8GB Ram,1TB Hard Drive,Video Card Nvidia GTX 650 1GB" 
                         price={529.99}
                         image='https://m.media-amazon.com/images/I/711MUuOhJiL._AC_SL1500_.jpg' 
                         rating={3.5}
                         precision={0.5}
                    />
                    <Product 
                        id='55725478365'
                        title="SAMSUNG 65-Inch Class Neo QLED 8K QN800A Series - 8K UHD Quantum HDR 32x Smart TV with Alexa Built-in" 
                        price={1500.99}
                        image='https://m.media-amazon.com/images/I/81bmOxFZYWL._AC_SL1500_.jpg' 
                        rating={5}
                   />
                    <Product 
                        id='5345354354345'
                         title="Lanteso Waterproof TWS Bluetooth Earbuds with Mics Noise Reduction Touch Control Bluetooth Headphones with Deep Bass Sound in Ear Earphones for Sports" 
                         price={1500.99}
                         image='https://m.media-amazon.com/images/I/7192+vIqr+L._AC_SL1500_.jpg' 
                         rating={4.5}
                         precision={0.5}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id='4665394946131' 
                         title="Z-Edge U27I4K 27-inch Gaming Monitor Ultra HD 4K 3840x2160 IPS LED Monitor, 250 cd/m², 4 ms Response Time, HDMIx2+DPx2, Built-in Speakers, FreeSync Technology" 
                         price={269.99}
                         image='https://m.media-amazon.com/images/I/71bQsqK-BgS._AC_SL1500_.jpg' 
                         rating={5}
                    />
                    </div>
            </div>
        </div>
    )
}

export default Home
