import React, { useState, useEffect } from 'react';
import NavBar from '../../views/Navbar/Navbar';
import Footer from '../../views/Footer/footer';
import './UserPage.css';
import { Link, useParams } from 'react-router-dom';

export const UserPage_detail = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        const baseURL = 'http://127.0.0.1:8000/api/';
        const path = 'order_detail/'+id; // Replace with the actual API endpoint
        console.log(baseURL + path);
        fetch(baseURL + path)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setData(data)})
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
                    
                        <div className="order-box" >
                        {data.map((order) => (
                            <>
                            <div>Quantity: {order.quantity}</div>
                            <div>Name: {order.name_products}</div>
                            </>
                            ))}
                           
                        </div>
                    
                </div>
            </div>
            <Footer />
        </>
    );
};
