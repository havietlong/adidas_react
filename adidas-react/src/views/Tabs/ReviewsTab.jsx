import { React, useState } from 'react'
import './Tabs.css'

const ReviewsTab = () => {
    const [isHidden, setIsHidden] = useState(false);

    const toggleTab = () => {
        setIsHidden(!isHidden);
        console.log("hello");
    };
    return (
        <>
            <div className="filter-item">
                <span className="filter-title">Reviews</span>
                <span className="filter-arrower" onClick={toggleTab}>&#9660;</span>        
            </div>
            {isHidden && (
                    <div className="hidden-content">
                        <div className="sort-options" >
                            {/* <!-- Placeholder cho reviews --> */}
                            <div className="review-item">
                                <span className="reviewer-name">John Doe</span>
                                <div className="star-rating">
                                    <span className="star" onclick="rateProduct(1)">&#9733;</span>
                                    <span className="star" onclick="rateProduct(2)">&#9733;</span>
                                    <span className="star" onclick="rateProduct(3)">&#9733;</span>
                                    <span className="star" onclick="rateProduct(4)">&#9734;</span>
                                    <span className="star" onclick="rateProduct(5)">&#9734;</span>
                                </div>
                                <p className="review-content">Great product! Love it.</p>
                            </div>
                            {/* <!-- Placeholder cho reviews -->
            
                            <!-- Form nhập comment và đánh giá --> */}
                            <div className="review-form">
                                <input type="text" placeholder="Your name" id="reviewerName" />
                                <div className="star-rating">
                                    <span className="star" onclick="rateProduct(1)">&#9733;</span>
                                    <span className="star" onclick="rateProduct(2)">&#9733;</span>
                                    <span className="star" onclick="rateProduct(3)">&#9733;</span>
                                    <span className="star" onclick="rateProduct(4)">&#9734;</span>
                                    <span className="star" onclick="rateProduct(5)">&#9734;</span>
                                </div>
                                <textarea placeholder="Your review" id="reviewContent"></textarea>
                                <button onclick="submitReview()">Submit</button>
                            </div>
                            {/* <!-- Form nhập comment và đánh giá --> */}
                        </div>
                    </div>
                )}
            {/* <div className="tab-container">
                <button onClick={toggleTab}><span className="filter-arrower" >&#9660;</span></button>
                {isHidden && (
                    <div className="hidden-content">
                        hello
                    </div>
                )}
            </div> */}
        </>
    )
}

export default ReviewsTab