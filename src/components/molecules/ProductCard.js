import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap';
import RoundedButton from './RoundedButton';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/Actions';



const ProductCard = ({ product }) => {
    const [cartQuantity, setCartQuantity] = useState(0);
    const dispatch = useDispatch();
    const { totalItems, cartItems } = useSelector(state => state.cart);

    const onClickAddToCart = (product) => {

        setCartQuantity(cartQuantity + 1);
        dispatch({ type: 'ADD_TO_CART', payload: product });

    };
    const onClickIncrement = (product) => {
        console.log('totalItems', totalItems);
        setCartQuantity(cartQuantity + 1)
        dispatch({ type: 'UPDATE_QUANTITY', payload: { updateProductId: product.id, updateQuantity: cartQuantity + 1 } });

    };
    const onClickDecrement = (product) => {
        console.log('totalItems',totalItems);
        console.log('cartItems',cartItems);
        setCartQuantity(cartQuantity - 1)
        dispatch({
            type: 'REMOVE_FROM_CART', payload: {
                productId: product?.id,
                productQuantity: cartQuantity
            }
        });

    };

    return (
        <Card style={{ width: '10rem', margin: '0.5rem', border: 'none' }}>
            <Card.Img variant="top" src={product.imageUrl} />
            <Card.Body>
                <Card.Text className="text-muted">{product.description.length > 30 ? `${product.description.slice(0, 30)}...` : product.description}</Card.Text>
                <Card.Title> ₹{product.price}</Card.Title>

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
                        onClick={() => onClickAddToCart(product)}
                        disabled={cartQuantity > 0}
                        className='my-1 text-center w-100 rounded-pill'
                    >
                        Add To Cart
                    </Button>
                )}

                {cartQuantity > 0 && (
                    <div className="d-flex justify-content-between mt-2">
                        <RoundedButton onClick={() => onClickDecrement(product)}>-</RoundedButton>
                        <span className="m-2 ">{cartQuantity}</span>
                        <RoundedButton onClick={() => onClickAddToCart(product)}>+</RoundedButton>
                    </div>
                )}
            </Card.Body>
        </Card>
    );
};
export default ProductCard