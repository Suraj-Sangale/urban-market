import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./TopDeals.css";
import Heading from "./Heading";

const MultiImageSlider = (props) => {
    const { desktopItems, mobileItems, tabletItems, title, ImgArr, onclickImage } = props;
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: desktopItems,
            slidesToSlide: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: tabletItems,
            slidesToSlide: 3
        },
        mobile: {
            breakpoint: { max: 767, min: 464 },
            items: mobileItems,
            slidesToSlide: 1
        }
    };
    return (
        <div className="parent">
            <Heading title={title} />
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
                {ImgArr?.map((item, index) => {
                    return (
                        <div className="slider" key={index}>
                            <div className="image-container" >
                                <img src={item?.url} alt="movie" onClick={onclickImage} className="hover-image" />
                            </div>
                        </div>
                    );
                })}
            </Carousel>
        </div>
    );
}

export default MultiImageSlider