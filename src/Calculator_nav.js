import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { NavLink } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const Calculator_nav = () => {
  return (
    <Navbar className='navbar' expand="lg">
      <Container>
        <Navbar.Brand  className='cal'>Calculators</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to='/' className='navslink'>Home-loan</NavLink>
            <NavLink to='/Personal-Loan' className='navslink'>personal-loan</NavLink>
            <NavLink to='/Car-Loan' className='navslink'>Car-Loan</NavLink>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
