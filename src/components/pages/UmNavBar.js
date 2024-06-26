
import React from 'react';
import { Navbar, Nav, Form, FormControl, Container } from 'react-bootstrap';
import '../global.css'
import { FaShoppingCart } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import SingleDropdown from '../molecules/SingleDropdown';
import { useSelector } from 'react-redux';
import { Categories } from '../Data/Data';
import { useNavigate } from 'react-router-dom';



const UmNavBar = () => {

  const cartState = useSelector(state => state.cart);
  const navigate = useNavigate()

  const { cartItems } = cartState;
  let quantity = [...new Set(cartItems)].length
  const handleSearch = (e) => {
    e.preventDefault();
    const searchTerm = e.target.elements.searchTerm.value;
    alert(` currently stock for ${searchTerm} is not available`);
  };

  const handleCartClick = () => {
    navigate('/checkout')
    // alert('You clicked on the cart' + quantity);
  };

  const handleSignIn = () => {
    alert('You are not signed in');
  }; 
  const brandText = window.innerWidth < 576 ? 'UM' : 'Urban Market';

  return (
    <>

      <Navbar expand="lg" className="fixed-top UmNavBar">
        <Container className='d-flex align-items-center ' >
          <Navbar.Brand href="/" className='text-white d-none d-md-block'>Urban Market</Navbar.Brand>
          <Form className="d-flex search-form m-0" onSubmit={(e) => handleSearch(e)} inline>
            <FormControl type="text" name="searchTerm" placeholder="🔍Search Urban Market..." className="mr-sm-2 rounded-pill" style={{ width: '20rem', margin: '1rem' }} />
          </Form>
          <div id="basic-navbar-nav " className='d-flex justify-content-end' >

            {/* <Nav className="ml-auto"> */}
              <div className="cart-icon-container" style={{marginRight:'1rem'}}>
                <Nav.Link onClick={handleCartClick} className='text-white '>
                  <FaShoppingCart style={{ fontSize: '22px' }} />

                  <div className="cart-badge">
                    <span>{quantity < -1 ? 0 : quantity}</span>
                  </div>
                </Nav.Link>
              </div>
              <Nav.Link onClick={handleSignIn} className='text-white d-none d-md-block'>
                <IoPersonSharp style={{ fontSize: '20px' }} /> Sign In</Nav.Link>
            {/* </Nav> */}
          </div>
        </Container>
      </Navbar>
      <Navbar className='UmNavBarSecondary d-none d-lg-block' fixed="top" >
        <Container>
          <SingleDropdown title="Categories" options={Categories.Groceries} />
          <SingleDropdown title="Fruits" options={Categories.Fruits} />
          <SingleDropdown title="Home & Kitchen" options={Categories.HomeKitchen} />
          <SingleDropdown title="Fashion" options={Categories.Fashion} />
          <SingleDropdown title="Electronics" options={Categories.Electronics} />
          <SingleDropdown title="Beauty" options={Categories.Beauty} />
          <SingleDropdown title="Home Improvement" options={Categories.HomeImprovement} />
          <SingleDropdown title="Sports" options={Categories.Sports} />
        </Container>
      </Navbar>
    </>
  );
};

export default UmNavBar;
