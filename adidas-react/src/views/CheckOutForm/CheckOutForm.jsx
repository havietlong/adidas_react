import { React, useState } from 'react'

const CheckOutForm = () => {
    const [first_name, setFirst_name] = useState("");
    const [last_name, setLast_name] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");


    const handleFormSubmit = (e) => {
        e.preventDefault();
        const payload = {
            first_name: first_name,
            last_name: last_name,
            address: address,
            phoneNumber: phoneNumber
        }
        console.log(payload);
        // axios
        //     .post(`http://127.0.0.1:8000/api/products/add`, payload)
        //     .then((response) => {
        //         console.log(response);

        //     })
        //     .catch(error => {
        //         console.error(error);
        //     });
    };
    return (
        <>
            <div class="left-panel">
                {/* <div class="contact-title">CONTACT</div>
           
            <div class="contact-input">
                <input type="email" placeholder="Email"/>
            </div> */}
                <div class="address-title">ADDRESS</div>
                <div class="delivery-title">Delivery address</div>
                <div class="address-input">
                    <div class="name-input">
                        <input value={first_name}
                            onChange={(e) => setFirst_name(e.target.value)} type="text" placeholder="First Name" />
                        <input value={last_name}
                            onChange={(e) => setLast_name(e.target.value)} type="text" placeholder="Last Name" />
                    </div>
                    <input value={address}
                        onChange={(e) => setAddress(e.target.value)} type="text" placeholder="Address" />
                    <input value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)} type="tel" placeholder="Phone Number" />

                </div>
                <button class="checkout-button" onClick={handleFormSubmit}>Check Out</button>
                {/* <div class="billing-checkbox">
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
            </div> */}
            </div>
        </>
    )
}

export default CheckOutForm