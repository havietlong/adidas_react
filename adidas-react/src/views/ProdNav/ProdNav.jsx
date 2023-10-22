import React from 'react'

const ProdNav = () => {
  return (
    <div class="product-navigation">
        <ul>
            <li class="nav-item active" onclick="changeActive(this)">All Men's Shoes</li>
            <li class="nav-item" onclick="changeActive(this)">Sneakers</li>
            <li class="nav-item" onclick="changeActive(this)">Running</li>
            <li class="nav-item" onclick="changeActive(this)">Soccer</li>
            <li class="nav-item" onclick="changeActive(this)">Basketball</li>
            <li class="nav-item" onclick="changeActive(this)">Lifestyle</li>
        </ul>

    </div>

  )
}

export default ProdNav