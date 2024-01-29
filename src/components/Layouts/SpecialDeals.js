import React from 'react'
import { specialDealsImages } from '../Data/Data'
import MultiImageSlider from '../molecules/MultiImageSlider'
import { useNavigate } from 'react-router-dom';

const SpecialDeals = () => {
    const navigate = useNavigate();
    const onclickImage = () => {
        navigate('/products');
      };
    return (
        <div>
            <MultiImageSlider
                title={'Special Deals'}
                desktopItems={6}
                tabletItems={5}
                mobileItems={4}
                ImgArr={specialDealsImages}
                onclickImage={onclickImage}
            />
        </div>
    )
}

export default SpecialDeals