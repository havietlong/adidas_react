import React from 'react'

const CheckOutForm = () => {
  return (
    <>
     <div class="left-panel">
            <div class="contact-title">CONTACT</div>
           
            <div class="contact-input">
                <input type="email" placeholder="Email"/>
            </div>
            <div class="address-title">ADDRESS</div>
            <div class="delivery-title">Delivery address</div>
            <div class="address-input">
                <div class="name-input">
                    <input type="text" placeholder="First Name"/>
                    <input type="text" placeholder="Last Name"/>
                </div>
                <input type="text" placeholder="Address"/>
                <input type="tel" placeholder="Phone Number"/>
                
            </div>
            
            <div class="billing-checkbox">
                <label>
                    <input type="checkbox" id="billing-same" checked/> Billing and delivery address are the same
                </label>
            </div>
            <div class="address-form">
                <div class="name-input">
                    <input type="text" placeholder="First Name"/>
                    <input type="text" placeholder="Last Name"/>
                </div>
                <div class="name-input">
                <input type="text" placeholder="Address"/>
                <input type="tel" placeholder="Phone Number"/>
            </div>
            </div>
        </div>
    </>
  )
}

export default CheckOutForm