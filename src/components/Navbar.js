import { Navbar, Nav, Container } from 'react-bootstrap';
import React from 'react';
// import Nav from '../Navbar.css'
import '../styles/Navbar.css';
import loupe from '../assets/loupe.png'
import favoris from '../assets/Heart.png'
import user from '../assets/user.png'
import location from '../assets/location.png'
import shoppingBag from '../assets/shopping-bag.png'

function MyNavbar() {
  return (
    <>
    <Navbar bg="dark" variant="dark" expand="lg" className="fixed-top">
      
  <Container>
  <Navbar.Brand className="navbar-brand-left">
      <h1>SHINEORA</h1>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="/"><img className="icon" src={loupe}/></Nav.Link>
        <Nav.Link href="/"><img className="icon" src={location}/></Nav.Link>
        <Nav.Link href="/"><img className="icon" src={user}/></Nav.Link>
        <Nav.Link href="/"><img className="icon" src={favoris}/></Nav.Link>
        <Nav.Link href="/"><img className="icon" src={shoppingBag}/></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
<p>SHINEORA JEWELRY</p>
<a href="#" class="link">
  <h2>Decouvrir</h2>
</a>
</>

  );
}

export default MyNavbar;
