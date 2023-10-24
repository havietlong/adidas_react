import React from 'react'
import { Link,useParams } from 'react-router-dom'

function FilterParam() {
  const { type, category } = useParams();
  console.log("The type is: " + type);
  console.log("The category is: " + category);
  
  return { type, category }; // Return the parameters as an object
}

const ProdNav = () => {
  const { type, category } = FilterParam();
  let activeItem = ''
  if(category === ''||category == null){
    activeItem = type;
  }else{
    activeItem = category;
  }
 
  


  return (
    <div class="product-navigation">
        <ul>
            <li className={`nav-item ${activeItem === "men" ? 'active' : ''}`} ><Link to='/products/men' style={{textDecoration:'none',color:'black'}}>All Men's Shoes</Link></li>
            <li className={`nav-item ${activeItem === "sneakers" ? 'active' : ''}`}><Link to='/products/men/sneakers' style={{textDecoration:'none',color:'black'}}>Sneakers</Link></li>
            <li className={`nav-item ${activeItem === "running" ? 'active' : ''}`}><Link to='/products/men/running' style={{textDecoration:'none',color:'black'}}>Running</Link></li>
            <li className={`nav-item ${activeItem === "soccers" ? 'active' : ''}`}><Link to='/products/men/soccers' style={{textDecoration:'none',color:'black'}}>Soccer</Link></li>
            <li className={`nav-item ${activeItem === "basketball" ? 'active' : ''}`}><Link to='/products/men/basketball' style={{textDecoration:'none',color:'black'}}>Basketball</Link></li>
            <li className={`nav-item ${activeItem === "lifestyle" ? 'active' : ''}`}><Link to='/products/men/lifestyle' style={{textDecoration:'none',color:'black'}}>Lifestyle</Link></li>
        </ul>

    </div>

  )
}

export default ProdNav