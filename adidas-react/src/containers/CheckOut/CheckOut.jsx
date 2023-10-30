import {React,useEffect,useState,useRef} from 'react'
import CheckOutForm from '../../views/CheckOutForm/CheckOutForm'
import NavBar from '../../views/Navbar/Navbar'
import Footer from '../../views/Footer/footer'
import './CheckOut.css'
import OrderSummary from '../../views/OrderSummary/OrderSummary'
import { Form } from 'react-router-dom'
const CheckOut = () => {
    const [cart, setCart] = useState([]);
   

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     const payload = {
    //         first_name: first_name,
    //         last_name: last_name,
    //         address:address,
    //         phoneNumber:phoneNumber
    //     }
    //     console.log(payload)
    //     axios
    //         .post(`http://127.0.0.1:8000/api/products/add`, payload)
    //         .then((response) => {
    //             console.log(response);

    //         })
    //         .catch(error => {
    //             console.error(error);
    //         });

    // }

    useEffect(() => {
        // Retrieve cart data from local storage
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(storedCart);
       
      }, []);

      const total = cart.reduce((acc, item) => acc + item.price_products, 0);
      console.log(cart);
    return (
        <>
            <NavBar  />
            <div class="payment-container">
              
                <CheckOutForm price={total} cart={cart}/>
                <div className="rightt" style={{width:'40%'}}>
                    <OrderSummary price={total}/>
                    
                </div>
           
            </div>
            <Footer />
        </>
    )
}

export default CheckOut