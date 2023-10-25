import React from 'react'

const deleteFromCart = (itemId) => {
    // Retrieve the current cart data from local storage
    const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
  
    // Find the index of the item to be deleted
    const itemIndex = currentCart.findIndex((item) => item.id_products === itemId);
  
    if (itemIndex !== -1) {
      // Remove the item from the cart
      currentCart.splice(itemIndex, 1);
  
      // Update the local storage with the modified cart data
      localStorage.setItem('cart', JSON.stringify(currentCart));

      window.location.reload();
    } else {
      // Handle the case where the item is not found in the cart (e.g., show an error message)
      alert('Item not found in the cart');
    }
  };

const ProductCard = (props) => {
    const { data } = props;
  return (
    <>
    <div className="product-details">
                <div className="product-image">
                    <img src="https://assetmanagerpim-res.cloudinary.com/images/9e99f8ca0ad74b82bacbaf8700918cae_9366/H03472_00_plp_standard.jpg?sh=364&strip=false&sw=364"
                        alt="Product Image"/>
                </div>
                <div className="product-info">
                    <div className="product-name">{data.name_products}</div>
                    <div className="product-size">Size</div>
                    <div className="product-price">{data.price_products}</div>

                    <div className="size-selector">
                        <select
                        
                         onChange={(e) => updateQuantity(data.id_products, parseInt(e.target.value, 10))}
                        >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>

                    </div>

                </div>
                <div className="remove-product"  onClick={() => deleteFromCart(data.id_products)}>
                    <box-icon name='x'></box-icon>
                </div>
            </div>
    </>
  )
}

export default ProductCard