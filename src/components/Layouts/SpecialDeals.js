import React from 'react'
import { specialDealsImages } from '../Data/Data'
import MultiImageSlider from '../molecules/MultiImageSlider'

const SpecialDeals = () => {
    return (
        <div>
            <MultiImageSlider
                title={'Special Deals'}
                desktopItems={6}
                tabletItems={5}
                mobileItems={4}
                ImgArr={specialDealsImages}
            />
        </div>
    )
}

export default SpecialDeals