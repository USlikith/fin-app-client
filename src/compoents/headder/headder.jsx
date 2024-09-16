// import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import  ban  from "../../assets/branLogo.jpg";

const NavBar = () => {
  return (
    <Navbar  variant="dark" expand="lg" style={{ backgroundColor: '#063b87'}}>
      <Navbar.Brand href="#home">
        <img
          src={ban}
          alt="Brand Logo"
          style={{ width: '40px', height: 'auto', marginRight: '10px', marginLeft:'10px', borderRadius:'21px',}} // Adjust the size and spacing as needed
        />
        BrandName
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#services">Services</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Brand href="#home">
        <img
          src={ban}
          alt="Brand Logo"
          style={{ width: '40px', height: 'auto', marginRight: '10px', marginLeft:'10px', borderRadius:'21px',}} // Adjust the size and spacing as needed
        />
        BrandName
      </Navbar.Brand>
    </Navbar>
  );
};

export default NavBar;
