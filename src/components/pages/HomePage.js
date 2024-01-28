import React from 'react';
import HomeCarousel from '../molecules/HomeCarousel';
import TodaysDeals from '../molecules/TodaysDeals';
import TopDeals from '../molecules/TopDeals';
import SpecialDeals from '../Layouts/SpecialDeals';

const HomePage = () => {
  return (
    <>
      <div style={{ marginTop: '10rem' }}>
        <HomeCarousel />
        <TopDeals />
        <TodaysDeals />
        <SpecialDeals />
      </div>
    </>
  );
};

export default HomePage;
