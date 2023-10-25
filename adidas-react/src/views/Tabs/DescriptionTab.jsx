import { React, useState } from 'react'
import './Tabs.css'

const DescriptionTab = (props) => {
    const { data } = props;
    const [isHidden, setIsHidden] = useState(false);

    const toggleTab = () => {
        setIsHidden(!isHidden);
        console.log("hello");
        
    };

    return (
        <>
            <div className="filter-item">
                <span className="filter-title">Description</span>
                <span className="filter-arrow" onClick={toggleTab}>&#9660;</span>
            </div>
            {isHidden && (
                <div className="size-table" id="sizeTable" >
                    {/* <!-- Placeholder cho phần description --> */}
                    <div className="description-content">
                        <div className="description-image">
                            <img src="path_to_your_image" alt="Product Image" />
                        </div>
                        <div className="description-details">
                            <h2>{data[0].name_products}</h2>
                            <p>{data[0].description_products}</p>
                        </div>
                    </div>
                    {/* <!-- Placeholder cho phần description --> */}
                </div>
            )}
        </>
    )
}

export default DescriptionTab