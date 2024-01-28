import React from "react";
import { topDealsImages } from "../Data/Data";
import MultiImageSlider from "./MultiImageSlider";

const TopDeals = () => {
    return (
        <>
            <MultiImageSlider
                title={'Top Deals'}
                desktopItems={6}
                tabletItems={5}
                mobileItems={4}
                ImgArr={topDealsImages}
            />
        </>
    )
};
export default TopDeals;
