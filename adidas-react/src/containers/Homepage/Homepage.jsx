import {React,useState,useEffect} from 'react'
import Navbar from '../../views/Navbar/Navbar';
// import Two_Navbar from '../../views/2ndNavbar/two_Navbar';
import './Homepage.css'
import Carousel from "react-multi-carousel";
import Footer from '../../views/Footer/footer';
import About from '../../views/About/About';
import "react-multi-carousel/lib/styles.css";
import SliderCard from '../../views/Carousel/SliderCard';
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
        <Link to='/products'><img src='https://assets.adidas.com/images/w_600,f_auto,q_auto/df405cd0b7cc413d8baf00df1f527186_9366/Superstar_XLG_Shoes_White_IF8069_01_standard.jpg' /></Link>
        <SliderCard/>
        <img src='https://assets.adidas.com/images/w_600,f_auto,q_auto/df405cd0b7cc413d8baf00df1f527186_9366/Superstar_XLG_Shoes_White_IF8069_01_standard.jpg' />
        <img src='https://assets.adidas.com/images/w_600,f_auto,q_auto/df405cd0b7cc413d8baf00df1f527186_9366/Superstar_XLG_Shoes_White_IF8069_01_standard.jpg' />
        <img src='https://assets.adidas.com/images/w_600,f_auto,q_auto/df405cd0b7cc413d8baf00df1f527186_9366/Superstar_XLG_Shoes_White_IF8069_01_standard.jpg' />
        <img src='https://assets.adidas.com/images/w_600,f_auto,q_auto/df405cd0b7cc413d8baf00df1f527186_9366/Superstar_XLG_Shoes_White_IF8069_01_standard.jpg' />
        <img src='https://assets.adidas.com/images/w_600,f_auto,q_auto/df405cd0b7cc413d8baf00df1f527186_9366/Superstar_XLG_Shoes_White_IF8069_01_standard.jpg' />
        <img src='https://assets.adidas.com/images/w_600,f_auto,q_auto/df405cd0b7cc413d8baf00df1f527186_9366/Superstar_XLG_Shoes_White_IF8069_01_standard.jpg' />
        <img src='https://assets.adidas.com/images/w_600,f_auto,q_auto/df405cd0b7cc413d8baf00df1f527186_9366/Superstar_XLG_Shoes_White_IF8069_01_standard.jpg' />
        <img src='https://assets.adidas.com/images/w_600,f_auto,q_auto/df405cd0b7cc413d8baf00df1f527186_9366/Superstar_XLG_Shoes_White_IF8069_01_standard.jpg' />
      </Carousel>
      <br />
      <div className="button-container">
        <button className="black-button">New Arrivals</button>
        <button className="white-button">What’s Trending</button>
      </div>
      <br />
      <Carousel className='carousel' responsive={responsive}>
        <a href='google.com'><img src='https://assets.adidas.com/images/w_600,f_auto,q_auto/df405cd0b7cc413d8baf00df1f527186_9366/Superstar_XLG_Shoes_White_IF8069_01_standard.jpg' /></a>
        <img src='https://assets.adidas.com/images/w_600,f_auto,q_auto/df405cd0b7cc413d8baf00df1f527186_9366/Superstar_XLG_Shoes_White_IF8069_01_standard.jpg' />
        <img src='https://assets.adidas.com/images/w_600,f_auto,q_auto/df405cd0b7cc413d8baf00df1f527186_9366/Superstar_XLG_Shoes_White_IF8069_01_standard.jpg' />
        <img src='https://assets.adidas.com/images/w_600,f_auto,q_auto/df405cd0b7cc413d8baf00df1f527186_9366/Superstar_XLG_Shoes_White_IF8069_01_standard.jpg' />
        <img src='https://assets.adidas.com/images/w_600,f_auto,q_auto/df405cd0b7cc413d8baf00df1f527186_9366/Superstar_XLG_Shoes_White_IF8069_01_standard.jpg' />
        <img src='https://assets.adidas.com/images/w_600,f_auto,q_auto/df405cd0b7cc413d8baf00df1f527186_9366/Superstar_XLG_Shoes_White_IF8069_01_standard.jpg' />
        <img src='https://assets.adidas.com/images/w_600,f_auto,q_auto/df405cd0b7cc413d8baf00df1f527186_9366/Superstar_XLG_Shoes_White_IF8069_01_standard.jpg' />
        <img src='https://assets.adidas.com/images/w_600,f_auto,q_auto/df405cd0b7cc413d8baf00df1f527186_9366/Superstar_XLG_Shoes_White_IF8069_01_standard.jpg' />
        <img src='https://assets.adidas.com/images/w_600,f_auto,q_auto/df405cd0b7cc413d8baf00df1f527186_9366/Superstar_XLG_Shoes_White_IF8069_01_standard.jpg' />
        <img src='https://assets.adidas.com/images/w_600,f_auto,q_auto/df405cd0b7cc413d8baf00df1f527186_9366/Superstar_XLG_Shoes_White_IF8069_01_standard.jpg' />
      </Carousel>;
      <section class="horizontal-section">
        <div class="horizontal-carousel">
          <div class="horizontal-product">
            <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/fw23_brand_campaign_tease_catlp_tc_gazelle_red_d_b876a1133e.jpg" alt="Product 1" />
            <div class="product-detail">
              <h3>GAZELLE ORIGINALS</h3>
              <p>This classic started life as a trainer and grew into an iconic streetwear staple.</p>
              <button class="shop-buttons">Shop Now</button>
            </div>
          </div>

          <div class="horizontal-product">
            <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/running_fw23_adizero_boston12_launch_hp_tc_d_0920eaebac.jpg" alt="Product 2" />
            <div class="product-detail">
              <h3>
                TRAIN TO BE YOUR BEST</h3>
              <p>The race-day feeling on your training runs, powered by high-performance technology.</p>
              <button class="shop-buttons">Shop Now</button>
            </div>
          </div>

          <div class="horizontal-product">
            <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/fw23_adicolor_sept_launch_tcc_d_3f5cfe34ea.jpg" alt="Product 3" />
            <div class="product-detail">
              <h3>SWITCHING BETWEEN YOU</h3>
              <p>Who you are today isn’t necessarily who you’ll want to be tomorrow.</p>
              <button class="shop-buttons">Shop Now</button>
            </div>
          </div>

          <div class="horizontal-product">
            <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/hc184_fw23_bts_sep_shoes100_can_eng_onsite_hp_tcc_product_c51d00013d.jpg" alt="Product 4" />
            <div class="product-detail">
              <h3>BACK TO SCHOOL STYLES </h3>
              <p>Score must-have sets for fall and versatile Back to School basics.</p>
              <button class="shop-buttons">Shop Now</button>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Footer />
    </>
  )
}
