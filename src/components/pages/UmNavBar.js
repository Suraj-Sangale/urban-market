
import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container, InputGroup, NavDropdown } from 'react-bootstrap';
import '../global.css'
import { FaShoppingCart } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import SingleDropdown from '../molecules/SingleDropdown';
import CustomDropdown from '../molecules/CustomDropdown';



const UmNavBar = () => {
  const handleSearch = (e) => {
    e.preventDefault();
    const searchTerm = e.target.elements.searchTerm.value;
    alert(`You searched for: ${searchTerm}`);
  };

  const handleCartClick = () => {
    alert('You clicked on the cart');
  };

  const handleSignIn = () => {
    alert('You are not signed in');
  };

  const Groceries = ['Fruits and vegetables', 'dairy and bakery', 'snacks and branded fool', 'beverages', 'personal care', 'home care']
  const Fruits = ['Apple and pears', 'avocado', ' cherries', 'babies', 'dates']
  const HomeKitchen = ['Kitchenware', 'home decor', ' furniture', 'tablewear']
  const Fashion = ['Men', 'women', 'boys', 'girls  ']
  const Electronics = ['Mobile and tablets', 'TV and speaker', ' home appliances', 'computer', 'camera']
  const Beauty = ['Makeup', 'hair care', 'skin care', 'pregnancy', 'wellness']
  const HomeImprovement = ['Auto care', 'carpentry', ' electrical', 'hardware and pumping', 'home cleaning', 'home safety']
  const Sports = ['Toys and games', 'bags and travel luggages', 'fitness equipment']
  return (
    <>

      <Navbar expand="lg" className="bg-body-tertiary" style={{ height: '5rem' }}>
        <Container >
          <Navbar.Brand href="#home">Urban Market</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" style={{ justifyContent: 'flex-end' }}>
            <Form className="d-flex " onSubmit={(e) => handleSearch(e)} inline>
              <FormControl type="text" name="searchTerm" placeholder="🔍Search Urban Market..." className="mr-sm-2 rounded-pill" style={{ width: '20rem', margin: '1rem' }} />
            </Form>
            <Nav className="ml-auto">
              <Nav.Link onClick={handleCartClick}>
                <FaShoppingCart /> </Nav.Link>
              <Nav.Link onClick={handleSignIn}>
                <IoPersonSharp />Sign In</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar style={{ backgroundColor: 'pink' }}>
        <Container>
          <SingleDropdown title="Categories" options={Groceries} />
          <SingleDropdown title="Fruits" options={Fruits} />
          <SingleDropdown title="Home & Kitchen" options={HomeKitchen} />
          <SingleDropdown title="Fashion" options={Fashion} />
          <SingleDropdown title="Electronics" options={Electronics} />
          <SingleDropdown title="Beauty" options={Beauty} />
          <SingleDropdown title="HomeImprovement" options={HomeImprovement} />
          <SingleDropdown title="Sports" options={Sports} />
        </Container>
      </Navbar>
    </>
  );
};

export default UmNavBar;
