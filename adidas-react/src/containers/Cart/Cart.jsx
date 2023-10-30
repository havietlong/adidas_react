import {React, useState, useEffect} from 'react'
import NavBar from '../../views/Navbar/Navbar'
import Footer from '../../views/Footer/footer'
import ProductCard from '../../views/ProductCard/ProductCard'
import OrderSummary from '../../views/OrderSummary/OrderSummary'
import './Cart.css'
export const Cart = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
      // Retrieve cart data from local storage
      const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
      setCart(storedCart);
     
    }, []);

    function checkAuth(){
        const user = JSON.parse(localStorage.getItem('user'))
        if(user){
            window.location.replace("/checkOut")
        }else{
            window.location.replace("/login")
        }
    }

    

    const total = cart.reduce((acc, item) => acc + item.price_products, 0);
    console.log(cart);
    return (
        <>
            <NavBar />
            <div class="payment-container">
                <div class="left-panel">
                    <div class="your-bag">YOUR BAG</div>
                    <div class="total"> TOTAL: ({cart.length} items) {total} VND</div>
                    <div class="items-description">Items in your bag are not reserved — check out now to make them yours.</div>
                    {cart.map((item) => (
                    <ProductCard data={item}/>
                      ))}
                </div>
                <div class="right-panel">
                    <button class="checkout-button" onClick={checkAuth}>Check Out</button>
                   <OrderSummary price={total}/>
                </div>
            </div>
            <Footer />
        </>
    )
}
