import React from 'react'
import NavBar from '../../views/Navbar/Navbar'
export const Products = () => {
  return (
    <>
    <NavBar/>
    <section class="hero">
        <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/enUS/Images/xcat-fw23-fleece-glp-mh-lg-m-d_tcm221-1067739.jpg"
            alt="Background Image" class="hero-image"/>
        <div class="hero-content">
            <div class="content-text">
                NEW FLEECE FOR FALL

            </div>
            <div class="content-texts">
                <p>Cozy hoodies, crewnecks and sweatpants combine comfort and style.</p>

            </div>

            <button class="shop-button">SHOP NOW</button>
        </div>
    </section>
    </>

  )
}
