import { React, useState, useEffect } from 'react'
import { Link,useParams } from 'react-router-dom';

function ProductContainer({ image1, image2, name, price }) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {isHovered ? (
                <img src={image2} alt="Hovered Image" />
            ) : (
                <img src={image1} alt="Original Image" />
            )}
            <p>{name}</p>
            <p>{price}</p>
        </div>
    );
}

function FilterParam() {
    const { type, category } = useParams();
    console.log("The type is: " + type);
    console.log("The category is: " + category);
    
    return { type, category }; // Return the parameters as an object
  }
  

const DisplayProd = () => {
    const { type, category } = FilterParam();
    const [data, setData] = useState([]);
  
    useEffect(() => {
        
      const baseURL = 'http://127.0.0.1:8000/api/';
    if(category===''||category==null){
      const path = `${baseURL}products/${type}`;
      fetch(path)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
    }else{
    const path = `${baseURL}products/${type}/${category}`;
      fetch(path)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
    }
    
     
    }, [type, category]);

    return (
        <>
            <div className="product-container">
                {data.map(item => (

                    <div className="product">
                        <Link to='/product_info'>
                        <ProductContainer
                            image1="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7ed0855435194229a525aad6009a0497_9366/Superstar_Shoes_White_EG4958_01_standard.jpg"
                            image2="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d3c609326e3848249403dbb3d63c0433_9366/Superstar_XLG_Shoes_White_IF9995_02_standard_hover.jpg"
                            name={item.name_products}
                            price={item.price_products}
                        />
                        </Link>
                    </div>
                ))}

            </div>
        </>
    )
}

export default DisplayProd