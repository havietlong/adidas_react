import { React, useState } from 'react'
import './Tabs.css'

const DetailTab = () => {
    const [isHidden, setIsHidden] = useState(false);

    const toggleTab = () => {
        setIsHidden(!isHidden);
        console.log("hello");
    };

    return (
        <>
            <div className="filter-item">
                <span className="filter-title">Detail</span>
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
                        <li>- Chi tiết 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>- Chi tiết 2: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                            <li>- Chi tiết 3: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                ex ea commodo consequat.</li>
                            <li>- Chi tiết 4: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                fugiat nulla pariatur.</li>
                        </div>
                    </div>
                    {/* <!-- Placeholder cho phần description --> */}
                </div>
            )}
        </>
    )
}

export default DetailTab