import React from 'react'
import NavBar from '../../views/Navbar/Navbar'
import Footer from '../../views/Footer/footer'
import ProductCard from '../../views/ProductCard/ProductCard'
import OrderSummary from '../../views/OrderSummary/OrderSummary'
import './Cart.css'
export const Cart = () => {
    return (
        <>
            <NavBar />
            <div class="payment-container">
                <div class="left-panel">
                    <div class="your-bag">YOUR BAG</div>
                    <div class="total">TOTAL: (2 items) $525.28</div>
                    <div class="items-description">Items in your bag are not reserved — check out now to make them yours.</div>
                    <ProductCard />
                </div>
                <div class="right-panel">
                    <button class="checkout-button">Check Out</button>
                   <OrderSummary/>
                </div>
            </div>
            <Footer />
        </>
    )
}
