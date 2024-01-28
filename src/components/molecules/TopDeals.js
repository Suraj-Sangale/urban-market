import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./TopDeals.css";
import { topDealsImages } from "../Data/Data";
import Heading from "./Heading";
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6,
        slidesToSlide: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 5,
        slidesToSlide: 3
    },
    mobile: {
        breakpoint: { max: 767, min: 464 },
        items: 4,
        slidesToSlide: 1
    }
};
const TopDeals = () => {
    return (
        <div className="parent">
            <Heading title={'Top Deals'} />
            <Carousel
                responsive={responsive}
                autoPlay={true}
                swipeable={true}
                draggable={true}
                showDots={true}
                infinite={true}
                partialVisible={false}
                dotListClass="custom-dot-list-style"
            >
                {topDealsImages.map((imageUrl, index) => {
                    return (
                        <div className="slider" key={index}>
                            <div className="image-container">
                                <img src={imageUrl.url} alt="movie" className="hover-image" />
                            </div>
                        </div>
                    );
                })}
            </Carousel>
        </div>
    );
};
export default TopDeals;
