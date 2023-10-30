import React, { useState, useEffect } from 'react';
import NavBar from '../../views/Navbar/Navbar';
import Footer from '../../views/Footer/footer';
import './UserPage.css';

export const UserPage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const baseURL = 'http://127.0.0.1:8000/api/';
        const path = 'orders'; // Replace with the actual API endpoint

        fetch(baseURL + path)
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <>
            <NavBar />
            <div className="container-user-page">
                <div className="navigate-user-page">
                    <div className="selection">ORDERS</div>
                </div>
                <div className="display-navigation">
                    {data.map((order) => (
                        <div className="order-box" key={order.id_orders}>
                            <div>Time: {order.created_at_orders}</div>
                            <div>Price: {order.price_orders}</div>
                            <div>Receiver: {order.receiver_orders}</div>
                            <div>Address: {order.address_orders}</div>
                            <div>PhoneNum: {order.phoneNumber_orders}</div>
                            
                            <button><box-icon name='low-vision'></box-icon></button>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};
