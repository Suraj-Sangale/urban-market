
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
  let quantity = cartItems.length
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

  return (
    <>

      <Navbar expand="lg" className="bg-body-tertiary fixed-top" style={{ height: '5rem' }} >
        <Container >

          <Navbar.Brand href="/">Urban Market</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" style={{ justifyContent: 'flex-end' }}>
            <Form className="d-flex " onSubmit={(e) => handleSearch(e)} inline>
              <FormControl type="text" name="searchTerm" placeholder="🔍Search Urban Market..." className="mr-sm-2 rounded-pill" style={{ width: '20rem', margin: '1rem' }} />
            </Form>
            <Nav className="ml-auto">
              <div className="cart-icon-container">
                <Nav.Link onClick={handleCartClick}>
                  <FaShoppingCart style={{ fontSize: '20px' }} />

                  <div className="cart-badge">
                    <span>{quantity < -1 ? 0 : quantity}</span>
                  </div>
                </Nav.Link>
              </div>
              <Nav.Link onClick={handleSignIn}>
                <IoPersonSharp style={{ fontSize: '20px' }} /> Sign In</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar style={{ backgroundColor: 'pink', marginTop: '5rem' }} fixed="top">
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
