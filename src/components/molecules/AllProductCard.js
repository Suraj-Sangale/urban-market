import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap';
import RoundedButton from './RoundedButton';
import { useDispatch } from 'react-redux';

const AllProductCard = (props) => {
    const { product } = props;
    const dispatch = useDispatch();
    const [cartQuantity, setCartQuantity] = useState(0);

    const onClickAddToCart = () => {
        setCartQuantity(cartQuantity + 1);
        dispatch({ type: 'ADD_TO_CART', payload: { aa: 'shjs', jdd: 1 } });
    };
    const onClickDecrement = () => {
        setCartQuantity(cartQuantity - 1);
        dispatch({ type: 'REMOVE_FROM_CART', payload: { aa: 'shjs', jdd: 1 } });
    };

    return (
        <>
            <Card className="mb-3 APCard">
                <Card.Img variant="top" src={product.imageUrl} alt={product.name} />
                <Card.Body>
                    <div style={{ height: '4rem' }}>
                        <Card.Text className=' APName'>{product.name}</Card.Text>
                    </div>
                    <div >
                        <span className='APPrice'>₹{product.price}</span>
                        <span className='APoriginalPrice'>₹{product.originalPrice}</span>
                        <span className='APDiscount'>{product.discount}% OFF</span>
                    </div>


                    {cartQuantity <= 0 && (
                        <Button
                            variant="primary"
                            onClick={onClickAddToCart}
                            disabled={cartQuantity > 0}
                            className='mt-1 text-center w-100 rounded-pill'
                        >
                            Add To Cart
                        </Button>
                    )}

                    {cartQuantity > 0 && (
                        <div className="d-flex justify-content-end mt-2">
                            <RoundedButton onClick={onClickDecrement}>-</RoundedButton>
                            <span className="m-2 mx-4">{cartQuantity}</span>
                            <RoundedButton onClick={onClickAddToCart}>+</RoundedButton>
                        </div>
                    )}
                </Card.Body>
            </Card></>
    )
}

export default AllProductCard