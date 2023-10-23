import React from 'react'

const ProductCard = () => {
  return (
    <>
    <div className="product-details">
                <div className="product-image">
                    <img src="https://assetmanagerpim-res.cloudinary.com/images/9e99f8ca0ad74b82bacbaf8700918cae_9366/H03472_00_plp_standard.jpg?sh=364&strip=false&sw=364"
                        alt="Product Image"/>
                </div>
                <div className="product-info">
                    <div className="product-name">Product Name</div>
                    <div className="product-size">Size</div>
                    <div className="product-price">Price</div>

                    <div className="size-selector">
                        <select>
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
                <div className="remove-product"  >
                    <box-icon name='x'></box-icon>
                </div>
            </div>
    </>
  )
}

export default ProductCard