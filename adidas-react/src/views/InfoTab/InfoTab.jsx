import {React,useContext }from 'react'


const InfoTab = (props) => {
    const { data } = props;
  return (
    <>
    <div className="right">
            <div className="product-detailz">
                <div className="product-name">
                    <h1>Originals</h1>
                </div>
                <div className="product-description">
                    <p className="product-info">{data[0]?.name_products}</p>
                    <p className="product-info">{data[0]?.price_products}</p>
                    <p className="product-info" style={{height:'100%'}}>Great catch! This exclusive product is only available at adidas and can't be found anywhere else. This product is excluded from all promotional discounts and offers.</p>
                    <p className="product-info">3 colors available</p>
                    <p className="product-info">Product color: Olive Strata / Shadow Olive / Gum</p>
                </div>
            
                <div className="product-colors">
                    <h2>Colors</h2>
                    <div className="color-option">
                        <div className="color-sample" ></div>
                        <div className="color-name">Olive Strata </div>
                        <img src="black_shoes.jpg" alt="Black Shoes"/>
                    </div>                    
                </div>
            
                <div className="product-sizes">
                    <h2>Sizes</h2>
                    <table>
                        <tbody>
                            <tr>
                                <td>20</td>
                                <td>21</td>
                                <td>22</td>
                                <td>23</td>
                                <td>24</td>
                            </tr>
                            <tr>
                                <td>25</td>
                                <td>26</td>
                                <td>27</td>
                                <td>28</td>
                                <td>29</td>
                            </tr>
                            {/* <!-- Add more rows as needed --> */}
                        </tbody>
                    </table>
                </div>
            
                <button className="add-to-bag-button" >Add to Bag</button>
            </div>
            
        </div>
    </>
  )
}

export default InfoTab