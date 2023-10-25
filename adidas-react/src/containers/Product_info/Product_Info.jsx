import {React,useState,useEffect} from 'react'
import NavBar from '../../views/Navbar/Navbar'
import Footer from '../../views/Footer/footer'
import InfoTab from '../../views/InfoTab/InfoTab'
import Showcase from '../../views/Showcase/Showcase'
import ReviewsTab from '../../views/Tabs/ReviewsTab'
import DescriptionTab from '../../views/Tabs/DescriptionTab'
import DetailTab from '../../views/Tabs/DetailTab'
import Carousel from 'react-multi-carousel'
import { Link,useParams } from 'react-router-dom'
import './Product_Info.css'

function FilterParam() {
  const { id } = useParams();
  return { id }; // Return the parameters as an object
}

export const Product_Info = () => {
  const { id } = FilterParam();
  const [data, setData] = useState([]);

  useEffect(() => { 
    const baseURL = 'http://127.0.0.1:8000/api/';
    const path = `${baseURL}product_info/${id}`;
    console.log(path);
    fetch(path)
    .then(response => response.json())
    .then(data => setData(data))
    .catch(error => console.error(error));
  }, [id]);

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
      <NavBar />
      <div className="product_Container">
        <div className="left">
          <Showcase />
          <div className="filter-options">
            <ReviewsTab />
            <DescriptionTab data={data} />
            <DetailTab />
          </div>
          <Carousel className='carousel' responsive={responsive}>
            <Link to='/products'><img src='https://assets.adidas.com/images/w_600,f_auto,q_auto/df405cd0b7cc413d8baf00df1f527186_9366/Superstar_XLG_Shoes_White_IF8069_01_standard.jpg' /></Link>
            <img src='https://assets.adidas.com/images/w_600,f_auto,q_auto/df405cd0b7cc413d8baf00df1f527186_9366/Superstar_XLG_Shoes_White_IF8069_01_standard.jpg' />
            <img src='https://assets.adidas.com/images/w_600,f_auto,q_auto/df405cd0b7cc413d8baf00df1f527186_9366/Superstar_XLG_Shoes_White_IF8069_01_standard.jpg' />
            <img src='https://assets.adidas.com/images/w_600,f_auto,q_auto/df405cd0b7cc413d8baf00df1f527186_9366/Superstar_XLG_Shoes_White_IF8069_01_standard.jpg' />
            <img src='https://assets.adidas.com/images/w_600,f_auto,q_auto/df405cd0b7cc413d8baf00df1f527186_9366/Superstar_XLG_Shoes_White_IF8069_01_standard.jpg' />
            <img src='https://assets.adidas.com/images/w_600,f_auto,q_auto/df405cd0b7cc413d8baf00df1f527186_9366/Superstar_XLG_Shoes_White_IF8069_01_standard.jpg' />
            <img src='https://assets.adidas.com/images/w_600,f_auto,q_auto/df405cd0b7cc413d8baf00df1f527186_9366/Superstar_XLG_Shoes_White_IF8069_01_standard.jpg' />
            <img src='https://assets.adidas.com/images/w_600,f_auto,q_auto/df405cd0b7cc413d8baf00df1f527186_9366/Superstar_XLG_Shoes_White_IF8069_01_standard.jpg' />
            <img src='https://assets.adidas.com/images/w_600,f_auto,q_auto/df405cd0b7cc413d8baf00df1f527186_9366/Superstar_XLG_Shoes_White_IF8069_01_standard.jpg' />
            <img src='https://assets.adidas.com/images/w_600,f_auto,q_auto/df405cd0b7cc413d8baf00df1f527186_9366/Superstar_XLG_Shoes_White_IF8069_01_standard.jpg' />
          </Carousel>

        </div>
        <InfoTab data={data}/>
      </div>
      <Footer />
    </>
  )
}
