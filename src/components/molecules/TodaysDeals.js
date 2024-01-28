import React from 'react';
import { TodaysDealsProducts } from '../Data/Data';
import Heading from './Heading';
import ProductCard from './ProductCard';

const TodaysDeals = () => {
  return (
    <>
      <Heading title={'Todays Deals'} />
      <div className="d-flex flex-wrap justify-content-between m-3">
        {TodaysDealsProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default TodaysDeals;
