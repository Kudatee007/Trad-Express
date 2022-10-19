import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logoo from './img/TradExpress.png'
import './Navbarr.css'
import { Link } from 'react-router-dom'

const Navbarr = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
    <Container>
      <Navbar.Brand href="#home"><Link to='/'><img src={logoo} alt="" /></Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
         
        </Nav>
        <Nav>
          <Nav.Link href="#deets"><Link to='instantBuy/Sell' className='insBs'>Instant Buy/Sell</Link></Nav.Link>
          <Nav.Link eventKey={2} href="#memes">Learn</Nav.Link>
          <Nav.Link><Link to='/login' className='btnLog'><button className='btnLog'>Login</button></Link></Nav.Link>
          
          <Nav.Link href="#link"><Link to='/getStarted' className='btnLog'><button className='btnStart'>Get Started</button></Link></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
   
  )
}

export default Navbarr