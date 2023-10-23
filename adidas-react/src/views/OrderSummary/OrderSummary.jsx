import React from 'react'

const OrderSummary = () => {
    return (
        <div className="orderSummary_container">
            <div class="order-summary">ORDER SUMMARY</div>
            <div class="summary-item">
                <span>2 items:</span>
                <span>$222.00</span>
            </div>
            <div class="summary-item">
                <span>Original price:</span>
                <span>$250.00</span>
            </div>
            <div class="summary-item">
                <span>Sales Tax:</span>
                <span>$26.64</span>
            </div>
            <div class="summary-item">
                <span>Delivery:</span>
                <span>Free</span>
            </div>
            <div class="summary-item">
                <span>Sale:</span>
                <span>- $28.00</span>
            </div>
            <div class="summary-item totaly">
                <span>Total:</span>
                <span>$248.64</span>
            </div>
        </div>
    )
}

export default OrderSummary