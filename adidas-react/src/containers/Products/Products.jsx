import React from 'react'
import NavBar from '../../views/Navbar/Navbar'
import Breadcrumbs from '../../views/Breadcrumbs/Breadcrumbs'
import TitleNDes from '../../views/TitleNDes/TitleNDes'
import ProdNav from '../../views/ProdNav/ProdNav'
import Filter from '../../views/Filter/Filter'
import ShoeInfo from '../../views/ShoeInfo/ShoeInfo'
import Footer from '../../views/Footer/footer'
import Carousel from "react-multi-carousel"
import { Link } from 'react-router-dom'
import './Products.css'

export const Products = () => {
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
    <NavBar/>
    <section className="hero">
        <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/enUS/Images/xcat-fw23-fleece-glp-mh-lg-m-d_tcm221-1067739.jpg"
            alt="Background Image" className="hero-image"/>
        <div className="hero-content">
            <div className="content-text">
                NEW FLEECE FOR FALL

            </div>
            <div className="content-texts">
                <p>Cozy hoodies, crewnecks and sweatpants combine comfort and style.</p>

            </div>

            <button className="shop-button">SHOP NOW</button>
        </div>
    </section>
    <div className="navigation">
    <Breadcrumbs />
    </div>
    <TitleNDes/>
    <ProdNav/>
    <Filter/>
    <div class="text">
        <b>Recently views </b>
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
    <ShoeInfo/>
    <Footer/>
    </>

  )
}
