import React from 'react'
import CheckOutForm from '../../views/CheckOutForm/CheckOutForm'
import NavBar from '../../views/Navbar/Navbar'
import Footer from '../../views/Footer/footer'
import './CheckOut.css'
import OrderSummary from '../../views/OrderSummary/OrderSummary'
const CheckOut = () => {
    return (
        <>
            <NavBar />
            <div class="payment-container">
                <CheckOutForm />
                <div className="rightt" style={{width:'40%'}}>
                    <OrderSummary />
                    <button class="checkout-button">Check Out</button>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default CheckOut