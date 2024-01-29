import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap';
import RoundedButton from './RoundedButton';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/Actions';



const ProductCard = ({ product }) => {
    const [cartQuantity, setCartQuantity] = useState(0);
    const dispatch = useDispatch();

    const onClickAddToCart = (e) => {
        setCartQuantity(cartQuantity + 1);
        // dispatch(addToCart(cartQuantity));
        dispatch({ type: 'ADD_TO_CART', payload: { aa: 'shjs', jdd: 1 } });
        console.log('cartQuantity', cartQuantity);

    };
    const onClickDecrement = () => {
        setCartQuantity(cartQuantity - 1);
    };

    return (
        <Card style={{ width: '10rem', margin: '0.5rem', border: 'none' }}>
            <Card.Img variant="top" src={product.imageUrl} />
            <Card.Body>
                <Card.Text className="text-muted">{product.description.length > 30 ? `${product.description.slice(0, 30)}...` : product.description}</Card.Text>
                <Card.Title> ₹{product.dealPrice}</Card.Title>

                <div className='ODPrice'>
                    <div className='originalPrice'>₹{product.originalPrice}</div>
                    {product.discountPercentage > 0 && (
                        <div className="discountPercentage">
                            {product.discountPercentage}% OFF
                        </div>
                    )}
                </div>
                {cartQuantity <= 0 && (
                    <Button
                        variant="primary"
                        onClick={(e) => onClickAddToCart(e)}
                        disabled={cartQuantity > 0}
                        className='my-1 text-center w-100 rounded-pill'
                    >
                        Add To Cart
                    </Button>
                )}

                {cartQuantity > 0 && (
                    <div className="d-flex justify-content-between mt-2">
                        {/* <Button variant="outline-secondary" style={{ borderRadius: '100%', }} onClick={onClickDecrement}>+</Button> */}

                        <RoundedButton onClick={onClickDecrement}>-</RoundedButton>
                        <span className="m-2 ">{cartQuantity}</span>
                        <RoundedButton onClick={(e) => onClickAddToCart(e)}>+</RoundedButton>
                        {/* <Button variant="outline-secondary" style={{ borderRadius: '100%' }} onClick={onClickAddToCart}>+</Button> */}
                    </div>
                )}
            </Card.Body>
        </Card>
    );
};
export default ProductCard