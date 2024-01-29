import React from "react";
import { topDealsImages } from "../Data/Data";
import MultiImageSlider from "./MultiImageSlider";
import { useNavigate } from "react-router-dom";

const TopDeals = () => {
    const navigate = useNavigate();
    const onclickImage = () => {
        navigate('/products');
      };
    return (
        <>
            <MultiImageSlider
                title={'Top Deals'}
                desktopItems={6}
                tabletItems={5}
                mobileItems={4}
                ImgArr={topDealsImages}
                onclickImage={onclickImage}
            />
        </>
    )
};
export default TopDeals;
