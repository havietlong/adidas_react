import React from 'react'
import Navbar from '../../views/Navbar/Navbar';
// import NavBar_two from '../views/Navbar_two'
import './Homepage.css'
import Carousel from "react-multi-carousel";
import Footer from '../../views/Footer/footer';
import About from '../../views/About/About';
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';


export const Homepage = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <>
      <Navbar />
      <section className="hero">
        <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/xcat_fw23_fleece_hp_mh_lg_mw_d_36f063f3d0.png"
          alt="Background Image" className="hero-image" />
        <div className="hero-content">
          <div className="content-text">
            THE BASICS OF COMFORT

          </div>
          <div className="content-texts">
            <p>Cozy hoodies, crewnecks and sweatpants combine comfort and style.</p>

          </div>

          <button className="shop-button">SHOP NOW</button>
        </div>
      </section>


      <div className="text">
        <b>Still interested? </b>
      </div>
      <Carousel className='carousel' responsive={responsive}>
       <Link to='/products'><img  src='https://assets.adidas.com/images/w_600,f_auto,q_auto/df405cd0b7cc413d8baf00df1f527186_9366/Superstar_XLG_Shoes_White_IF8069_01_standard.jpg'/></Link> 
        <img  src='https://assets.adidas.com/images/w_600,f_auto,q_auto/df405cd0b7cc413d8baf00df1f527186_9366/Superstar_XLG_Shoes_White_IF8069_01_standard.jpg'/>
        <img  src='https://assets.adidas.com/images/w_600,f_auto,q_auto/df405cd0b7cc413d8baf00df1f527186_9366/Superstar_XLG_Shoes_White_IF8069_01_standard.jpg'/>
        <img  src='https://assets.adidas.com/images/w_600,f_auto,q_auto/df405cd0b7cc413d8baf00df1f527186_9366/Superstar_XLG_Shoes_White_IF8069_01_standard.jpg'/>
        <img  src='https://assets.adidas.com/images/w_600,f_auto,q_auto/df405cd0b7cc413d8baf00df1f527186_9366/Superstar_XLG_Shoes_White_IF8069_01_standard.jpg'/>
        <img  src='https://assets.adidas.com/images/w_600,f_auto,q_auto/df405cd0b7cc413d8baf00df1f527186_9366/Superstar_XLG_Shoes_White_IF8069_01_standard.jpg'/>
        <img  src='https://assets.adidas.com/images/w_600,f_auto,q_auto/df405cd0b7cc413d8baf00df1f527186_9366/Superstar_XLG_Shoes_White_IF8069_01_standard.jpg'/>
        <img  src='https://assets.adidas.com/images/w_600,f_auto,q_auto/df405cd0b7cc413d8baf00df1f527186_9366/Superstar_XLG_Shoes_White_IF8069_01_standard.jpg'/>
        <img  src='https://assets.adidas.com/images/w_600,f_auto,q_auto/df405cd0b7cc413d8baf00df1f527186_9366/Superstar_XLG_Shoes_White_IF8069_01_standard.jpg'/>
        <img  src='https://assets.adidas.com/images/w_600,f_auto,q_auto/df405cd0b7cc413d8baf00df1f527186_9366/Superstar_XLG_Shoes_White_IF8069_01_standard.jpg'/>
      </Carousel>;

      <div class="button-container">
        <button class="black-button">New Arrivals</button>
        <button class="white-button">What’s Trending</button>
    </div>

    <Carousel className='carousel' responsive={responsive}>
       <a href='google.com'><img  src='https://assets.adidas.com/images/w_600,f_auto,q_auto/df405cd0b7cc413d8baf00df1f527186_9366/Superstar_XLG_Shoes_White_IF8069_01_standard.jpg'/></a> 
        <img  src='https://assets.adidas.com/images/w_600,f_auto,q_auto/df405cd0b7cc413d8baf00df1f527186_9366/Superstar_XLG_Shoes_White_IF8069_01_standard.jpg'/>
        <img  src='https://assets.adidas.com/images/w_600,f_auto,q_auto/df405cd0b7cc413d8baf00df1f527186_9366/Superstar_XLG_Shoes_White_IF8069_01_standard.jpg'/>
        <img  src='https://assets.adidas.com/images/w_600,f_auto,q_auto/df405cd0b7cc413d8baf00df1f527186_9366/Superstar_XLG_Shoes_White_IF8069_01_standard.jpg'/>
        <img  src='https://assets.adidas.com/images/w_600,f_auto,q_auto/df405cd0b7cc413d8baf00df1f527186_9366/Superstar_XLG_Shoes_White_IF8069_01_standard.jpg'/>
        <img  src='https://assets.adidas.com/images/w_600,f_auto,q_auto/df405cd0b7cc413d8baf00df1f527186_9366/Superstar_XLG_Shoes_White_IF8069_01_standard.jpg'/>
        <img  src='https://assets.adidas.com/images/w_600,f_auto,q_auto/df405cd0b7cc413d8baf00df1f527186_9366/Superstar_XLG_Shoes_White_IF8069_01_standard.jpg'/>
        <img  src='https://assets.adidas.com/images/w_600,f_auto,q_auto/df405cd0b7cc413d8baf00df1f527186_9366/Superstar_XLG_Shoes_White_IF8069_01_standard.jpg'/>
        <img  src='https://assets.adidas.com/images/w_600,f_auto,q_auto/df405cd0b7cc413d8baf00df1f527186_9366/Superstar_XLG_Shoes_White_IF8069_01_standard.jpg'/>
        <img  src='https://assets.adidas.com/images/w_600,f_auto,q_auto/df405cd0b7cc413d8baf00df1f527186_9366/Superstar_XLG_Shoes_White_IF8069_01_standard.jpg'/>
      </Carousel>;
      <About/>
      <Footer/>
    </>
  )
}
