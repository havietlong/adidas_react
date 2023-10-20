import React from 'react'
import Navbar from '../views/Navbar/Navbar'
import Carousel from '../views/Carousel/Carousel'
// import NavBar_two from '../views/Navbar_two'
import './Homepage.css'

export const Homepage = () => {
  const items = [
    { title: "Image 0", image: "image0" },
    { title: "Image 1", image: "image1" },
    { title: "Image 2", image: "image2" },
    { title: "Image 3", image: "image3" },
    { title: "Image 4", image: "image4" },
    { title: "Image 5", image: "image5" },
    { title: "Image 6", image: "image6" },
    { title: "Image 7", image: "image7" }
  ];
  return (
    <>
    <Navbar/>
    <section className="hero">
        <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/xcat_fw23_fleece_hp_mh_lg_mw_d_36f063f3d0.png"
            alt="Background Image" className="hero-image"/>
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
    <Carousel/>
    </>
  )
}
