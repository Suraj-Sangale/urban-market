import React from 'react'
import { Link } from 'react-router-dom'

const ProductDetails = () => {
    return (
        <>
            <div style={{ marginTop: '10rem' }}>ProductDetails</div>
            <div><Link to="/home">
                <button>Go to Home</button>
            </Link></div>
            <div><Link to="/products">
                <button>Go To All Products</button>
            </Link></div>
        </>
    )
}

export default ProductDetails