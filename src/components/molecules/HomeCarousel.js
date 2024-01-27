import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../global.css'
import { Link } from 'react-router-dom';
const HomeCarousel = () => {
    const images = [{ id: 1, src: "https://i.ibb.co/98GFgGr/3.jpg" },
    { id: 2, src: "https://i.ibb.co/ZfgMQY3/2.jpg" },
    { id: 3, src: "https://i.ibb.co/jMbdnZc/1.jpg" },
    { id: 4, src: "https://i.ibb.co/k4Gy7Ty/6.jpg" },
    { id: 5, src: "https://i.ibb.co/9VGnT4B/4.jpg" },
    { id: 6, src: "https://i.ibb.co/tJs9wFv/7.jpg" },
    ]
    return (
        <Carousel className='my-4'>
            {images.map((item, index) => (
                <Carousel.Item key={item.id} as={Link} to="/products">
                    <img
                        className="d-block w-100"
                        src={item.src}
                        alt="Carousel slide"
                    />
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default HomeCarousel;
